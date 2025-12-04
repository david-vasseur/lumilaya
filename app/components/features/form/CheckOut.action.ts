"use server";

import { PrismaClient } from "@/lib/generated/prisma/client";
import Stripe from "stripe";

type PricePerProduct = {
  productId: string;
  variantId: number;
  price: number; // prix unitaire avec promo appliquée
  qty: number;
};

const prisma = new PrismaClient();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2025-11-17.clover",
});


export async function handleCheckout(
  pricesForStripe: PricePerProduct[],
  customer: {
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
  }
) {
  // Préparer les items pour Stripe

  const productIds = pricesForStripe.map(p => p.productId);

  const products = await prisma.product.findMany({
    where: { id: { in: productIds } },
    select: { id: true, name: true }
  });


  const lineItems = pricesForStripe.map(p => {
  const product = products.find(prod => prod.id === p.productId);
  const productName = product ? `Bougie ${product.name}` : `Produit ${p.productId}`;

    return {
      price_data: {
        currency: "eur",
        product_data: { name: productName },
        unit_amount: Math.round(p.price * 100), // prix exact serveur
      },
      quantity: p.qty,
    };
  });


  const orderId = `ORD-${customer.lastName}-${Date.now()}`;

  // Créer la session Stripe Checkout
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
      products: JSON.stringify(pricesForStripe),
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


