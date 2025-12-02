"use server"

import { PrismaClient } from "@/lib/generated/prisma/client";

const prisma = new PrismaClient();

export async function seedProduct() {
  await prisma.product.create({
    data: {
      collection: "Emotion",
      name: "Magie",
        slug: "bougie-magique",
        description: [
            "Plongez dans l’atmosphère magique des fêtes avec cette bougie qui évoque les plaisirs chaleureux de Noël. Les notes de tête d’orange apportent une fraîcheur lumineuse et pétillante, rapidement enveloppée par le cœur chaleureux et épicé de la cannelle. En fond, la vanille et le caramel créent un sillage gourmand et réconfortant, rappelant les douceurs sucrées et les instants cocooning de l’hiver.", 
            "Une fragrance festive qui transforme votre intérieur en véritable havre de Noël, empli de chaleur et de convivialité."
        ],
        intro: "Une alchimie festive entre l’éclat fruité de l’orange, la chaleur réconfortante de la cannelle et la douceur gourmande du caramel et de la vanille. Confectionnée avec une cire de soja 100% naturelle et des fragrances de haute qualité.",
        theme: [
            "Orange",
            "Canelle",
            "Caramel, Vanille"
        ],images: [
            "/images/produits/magie.webp",
            "/images/produits/magie2.webp",            
            "/images/produits/magie2.webp",            
            "/images/produits/magie2.webp",            
            "/images/produits/magie2.webp"
        ],
        caracteristique: {
            composition: "60% Soja, 40% Coco",
            meche: "Coton Bio",
            parfum: "Fragrance de Grasse sans CMR",
            combustion: "35 - 40",
            poids: "330",
            contenant: "Verre recyclable",
            fabrication: "France, Gard"
        },
        variants: [
            {
                id: 4.1,
                name: "Bougie Magie 150g",
                duration: "35",
                price: 19.9
            },
            {
                id: 4.2,
                name: "Bougie Magie 200g",
                duration: "40",
                price: 24.9
            }
        ],
        stock: true,
        promo: 15,
        like: 5
    }
  });

  await prisma.$disconnect();
}
