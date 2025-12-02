"use server"

import { PrismaClient } from "@/lib/generated/prisma/client";

const prisma = new PrismaClient();

export default async function ProductList(collection: string) {
    const products = await prisma.product.findMany({
        where: { collection },
    });  

    return products.map((p) => ({
        id: p.id,
        collection: p.collection,
        name: p.name,
        slug: p.slug,
        description: Array.isArray(p.description) ? (p.description as string[]) : [],
        intro: p.intro,
        theme: Array.isArray(p.theme) ? (p.theme as string[]) : [],
        images: Array.isArray(p.images) ? (p.images as string[]) : [],
        caracteristique: {
        ...(p.caracteristique as {
            composition: string;
            meche: string;
            parfum: string;
            combustion: string;
            poids: string;
            contenant: string;
            fabrication: string;
        }),
        },
        variants: Array.isArray(p.variants)
        ? (p.variants as { id: number; name: string; duration: string; price: number }[])
        : [],
        stock: p.stock,
        promo: p.promo ?? 0,
        like: p.like ?? 0,
        createdAt: p.createdAt,
    }));
}