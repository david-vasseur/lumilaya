"use server";

import { PrismaClient } from "@/lib/generated/prisma/client";
import Stripe from "stripe";
import { getPricesForStripe } from "../../actions/product.action";
import { headers } from "next/headers";
import { rateLimiter } from "@/lib/rate-limit/rateLimit";

const prisma = new PrismaClient();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2025-11-17.clover",
});

type PricePerProduct = {
	productId: string;
	variantId: number;
	price: number; // prix unitaire avec promo appliquée
	qty: number;
};

type CustomerInfo = {
	firstName: string;
	lastName: string;
	email: string;
	phone?: string;
	shippingAddress: string;
	shippingCity: string;
	shippingPostalCode: string;
	shippingCountry: string;
	billingAddress: string;
	billingCity: string;
	billingPostalCode: string;
	billingCountry: string;
	acceptCGV: boolean;
};

type ServerItem = {
	productId: string;
	variantId: number;
	qty: number;
	name: string;
};

// -----------------------------------------------------------------------------------------------------------

export async function handleCheckout(clientItems: ServerItem[], customer: CustomerInfo) {
	try {

		const h = await headers();
		const ipRaw = (h.get("x-forwarded-for") || h.get("x-real-ip") || "0.0.0.0").split(",")[0].trim();

		try {
		await rateLimiter.consume(ipRaw); // Throws si dépasse le quota
		} catch (rejRes) {
		console.warn("Rate limit atteint pour", ipRaw);
		return { url: null, error: "Trop de requêtes, essayez plus tard." };
		}


		if (!clientItems || clientItems.length === 0) {
		throw new Error("Le panier est vide.");
		}

		// 🔒 1️⃣ Recalculer TOUS les prix côté serveur
		const securePrices = await getPricesForStripe(clientItems);
		if (!securePrices.length) {
		throw new Error("Panier invalide.");
		}

		const totalProducts = securePrices.reduce(
		(acc, item) => acc + item.price * item.qty,
		0
		);

		// 🔒 2️⃣ Recalculer le shipping côté serveur
		const shippingResult = await AddShippingPrice(customer.shippingCountry, totalProducts);
		let shippingLineItem = { name: "", price: 0 };

		if (shippingResult.status === "free") {
		shippingLineItem = { name: shippingResult.shipping?.name ?? "Livraison", price: 0 };
		} else if (shippingResult.status === "not free" && shippingResult.shipping) {
		shippingLineItem = {
			name: shippingResult.shipping.name,
			price: shippingResult.shipping.price,
		};
		} else {
		throw new Error("Impossible de calculer la livraison.");
		}

		// 🔒 3️⃣ Récupérer les produits pour Stripe
		const productIds = securePrices.map((p) => p.productId);
		const products = await prisma.product.findMany({
		where: { id: { in: productIds } },
		select: { id: true, name: true },
		});

		const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = [
		...securePrices.map((item) => {
			const product = products.find((p) => p.id === item.productId);
			const productName = product ? `Bougie ${product.name}` : `Produit ${item.productId}`;
			return {
			price_data: {
				currency: "eur",
				product_data: { name: productName },
				unit_amount: Math.round(item.price * 100),
			},
			quantity: item.qty,
			};
		}),
		{
			price_data: {
			currency: "eur",
			product_data: { name: shippingLineItem.name },
			unit_amount: Math.round(shippingLineItem.price * 100),
			},
			quantity: 1,
		},
		];

		const orderId = `ORD-${customer.lastName}-${Date.now()}`;

		// 🔒 4️⃣ Créer la session Stripe
		const session = await stripe.checkout.sessions.create({
		payment_method_types: ["card"],
		line_items: lineItems,
		mode: "payment",
		success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout-success?session_id={CHECKOUT_SESSION_ID}`,
		cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout-cancel`,
		client_reference_id: orderId,
		customer_email: customer.email,
		metadata: {
			firstName: customer.firstName,
			lastName: customer.lastName,
			email: customer.email,
			phone: customer.phone || "",
			shippingAddress: customer.shippingAddress,
			shippingCity: customer.shippingCity,
			shippingPostalCode: customer.shippingPostalCode,
			shippingCountry: customer.shippingCountry,
			billingAddress: customer.billingAddress,
			billingCity: customer.billingCity,
			billingPostalCode: customer.billingPostalCode,
			billingCountry: customer.billingCountry,
			products: JSON.stringify(securePrices),
			shipping: JSON.stringify(shippingLineItem),
		},
		});

		return { url: session.url };
	} catch (err: any) {
		console.error("❌ Erreur dans handleCheckout :", err?.message ?? err);
		return { url: null };
	}
}

// --------------------------------------------------------------------------------------------------------------------------

export async function clientCheckout(session_id: string) {
	try {
		if (!session_id) {
		throw new Error("Session ID manquant");
		}

		// Récupération de la session
		const session = await stripe.checkout.sessions.retrieve(session_id, {
		expand: ["line_items"], // pour récupérer les produits commandés
		});

		// Numéro de commande : à récupérer depuis metadata ou client_reference_id
		const orderId =
		(session.metadata && session.metadata.order_id) ||
		session.client_reference_id ||
		null;

		// Nom du client
		const customerName = session.customer_details?.name || "Client inconnu";

		// Montant payé (en centimes)
		const amountTotal = session.amount_total || 0;

		// Produits commandés
		const lineItems =
		session.line_items?.data.map((item) => ({
			name: item.description,
			quantity: item.quantity,
			price: item.price?.unit_amount,
		})) || [];

		return {
		orderId,
		customerName,
		amountTotal,
		lineItems,
		};
	} catch (err: any) {
		console.error("❌ Erreur dans clientCheckout :", err?.message ?? err);
		return {
		orderId: null,
		customerName: "Erreur",
		amountTotal: 0,
		lineItems: [],
		};
	}
}

// ----------------------------------------------------------------------------------------------------------------

export async function AddShippingPrice(code: string, total: number) {
	try {
		if (code === "FR" && total >= 50) {
			return { status: "free", message: "Livraison offerte" };
		}

		const shipping = await prisma.shippingPrice.findFirst({
			where: { zone: code },
		});

		if (!shipping) {
			console.error("❌ Aucun tarif de livraison trouvé pour le code :", code);
			return { status: "Erreur", message: "Une erreur est survenue" };
		}

		console.log("📦 Shipping calculé :", shipping, "Total :", total);
		return { status: "not free", shipping };
	} catch (err: any) {
		console.error("❌ Erreur dans AddShippingPrice :", err?.message ?? err);
		return { status: "Erreur", message: "Une erreur est survenue" };
	}
}

