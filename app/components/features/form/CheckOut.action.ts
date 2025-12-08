"use server";

import { PrismaClient } from "@/lib/generated/prisma/client";
import Stripe from "stripe";
import { getPricesForStripe } from "../../actions/product.action";

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

const prisma = new PrismaClient();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2025-11-17.clover",
});


export async function handleCheckout(
  clientItems: ServerItem[],
  customer: CustomerInfo
) {
  if (!clientItems || clientItems.length === 0) {
    throw new Error("Le panier est vide.");
  }

  // 🔒 1️⃣ Recalculer TOUS les prix côté serveur
  const securePrices: PricePerProduct[] = await getPricesForStripe(clientItems);

  if (!securePrices.length) {
    throw new Error("Panier invalide.");
  }

  const totalProducts = securePrices.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  // 🔒 2️⃣ Recalculer le shipping côté serveur
  const shippingResult = await AddShippingPrice(customer.shippingCountry, totalProducts);

  let shippingLineItem = {
    name: "",
    price: 0
  };

  if (shippingResult.status === "free") {
    shippingLineItem = { name: shippingResult.shipping?.name ?? "Livraison", price: 0 };
  } else if (shippingResult.status === "not free" && shippingResult.shipping) {
    shippingLineItem = {
      name: shippingResult.shipping.name,
      price: shippingResult.shipping.price
    };
  } else {
    throw new Error("Impossible de calculer la livraison.");
  }

  // 🔒 3️⃣ Récupérer les produits pour Stripe
  const productIds = securePrices.map(p => p.productId);
  const products = await prisma.product.findMany({
    where: { id: { in: productIds } },
    select: { id: true, name: true }
  });

  const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = [
    ...securePrices.map(item => {
      const product = products.find(p => p.id === item.productId);
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
    // Ajouter le shipping
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

  return {
    url: session.url,
  };
}


export async function clientCheckout(session_id: string) {
  if (!session_id) throw new Error("Session ID manquant");

  // Récupération de la session
  const session = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ["line_items"], // pour récupérer les produits commandés
  });

  // Numéro de commande : à récupérer depuis metadata ou client_reference_id
  const orderId =
    (session.metadata && session.metadata.order_id) || session.client_reference_id || null;

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
}


export async function AddShippingPrice(code: string, total: number) {
	if (code === "FR" && total >= 50) {
		console.log("livraison free", total);
		
		return {status: "free", message: "Livraison Offerte"};

	} else {

		const shipping = await prisma.shippingPrice.findFirst({
			where: { zone:  code }
		});

		if (!shipping) {
			
			return { status: "Erreur", message: "une erreur est survenue" };
		};
		console.log(shipping, total);
		
		return {status : "not free", shipping};
	}
}

