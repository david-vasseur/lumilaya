"use server";

import { PrismaClient } from "@/lib/generated/prisma/client";
import Stripe from "stripe";

const prisma = new PrismaClient();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2025-11-17.clover",
});

export async function handleCheckout(
    products: { name: string; price: number; qty: number }[],
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
    const lineItems = products.map(p => ({
        price_data: {
        currency: "eur",
        product_data: { name: p.name },
        unit_amount: Math.round(p.price * 100),
        },
        quantity: p.qty,
    }));

    // Créer la session Stripe Checkout
    const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: lineItems,
            mode: "payment",
            success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout-success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout-cancel`,
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
                products: JSON.stringify(products),
            },
    });

    return {
        url: session.url, // ← URL pour redirection côté client
    };
}


