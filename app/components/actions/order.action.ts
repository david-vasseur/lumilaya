"use server"

import { Resend } from "resend";
import OrderEmail from "../ui/orderEmail";
import { OrderProduct } from "@/type/orderProduct";
import { OrderEmailData } from "@/type/orderEmail";

const resend = new Resend(process.env.RESEND_API_KEY!);

export const sendOrderEmailToCompany = async (order: OrderEmailData, products: OrderProduct[]) => {
    await resend.emails.send({
        from: "Commandes <contact@david-vasseur.fr>",
        to: ["entreprise.lumilaya@outlook.fr"],
        subject: `Nouvelle commande #${order.id}`,
        react: OrderEmail({
            orderId: order.id,
            firstName: order.firstName,
            lastName: order.lastName,
            email: order.email,
            phone: order.phone,
            total: order.total,
            items: products,
            shippingAddress: order.shippingAddress,
            shippingCity: order.shippingCity,
            shippingPostalCode: order.shippingPostalCode,
            shippingCountry: order.shippingCountry,
        }),
    });
}