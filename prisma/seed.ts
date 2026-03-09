import { PrismaClient } from "@/lib/generated/prisma/client";

const prisma = new PrismaClient();

async function main() {
  // --- Products ---
    await prisma.product.createMany({
        data: [
            {
                collection: "Emotion",
                name: "Tendresse",
                slug: "bougie-tendresse",
                description: JSON.stringify([
                    "Decription 1", 
                    "Description 2"
                ]),
                intro: "Intro",
                theme: JSON.stringify([
                    "Theme 1", // tête
                    "Theme 2", // Coeur
                    "Theme 3" // fond
                ]),
                images: JSON.stringify([
                    "/images/produits/tendresse.webp",
                    "/images/produits/tendresse2.webp",
                    "/images/produits/tendresse3.webp",
                    "/images/produits/tendresse4.webp"
                ]),
                caracteristique: JSON.stringify({
                composition: "Cire de coco et de soja 100% naturelle",
                meche: "Mèche en coton bio",
                parfum: "Fragrance de Grasse",
                combustion: "Combustion",
                poids: "150",
                contenant: "Pot en bêton fait main",
                fabrication: "France",
                }),
                variants: JSON.stringify([
                    { id: 1, name: "Bougie Tendresse 150g", duration: "25", price: 19.90 } // sera affiché 25 -30h
                ]),
                stock: true,
                promo: 0,
                like: 0,
            },{
                collection: "Emotion",
                name: "Vitalité",
                slug: "bougie-vitalite",
                description: JSON.stringify([
                    "Decription 1", 
                    "Description 2"
                ]),
                intro: "Intro",
                theme: JSON.stringify([
                    "Theme 1", // tête
                    "Theme 2", // Coeur
                    "Theme 3" // fond
                ]),
                images: JSON.stringify([
                    "/images/produits/vitalite.webp",
                    "/images/produits/vitalite1.webp",
                    "/images/produits/vitalite2.webp",
                    "/images/produits/vitalite3.webp"
                ]),
                caracteristique: JSON.stringify({
                composition: "Cire de coco et de soja 100% naturelle",
                meche: "Mèche en coton bio",
                parfum: "Fragrance de Grasse",
                combustion: "Combustion",
                poids: "150",
                contenant: "Pot en bêton fait main",
                fabrication: "France",
                }),
                variants: JSON.stringify([
                    { id: 1, name: "Bougie Vitalité 150g", duration: "25", price: 19.90 } // sera affiché 25 -30h
                ]),
                stock: true,
                promo: 0,
                like: 0,
            },
            {
                collection: "Emotion",
                name: "Douceur",
                slug: "bougie-douceur",
                description: JSON.stringify([
                    "Decription 1", 
                    "Description 2"
                ]),
                intro: "Intro",
                theme: JSON.stringify([
                    "Theme 1", // tête
                    "Theme 2", // Coeur
                    "Theme 3" // fond
                ]),
                images: JSON.stringify([
                    "/images/produits/douceur.webp",
                    "/images/produits/douceur2.webp",
                    "/images/produits/douceur3.webp",
                    "/images/produits/douceur4.webp"
                ]),
                caracteristique: JSON.stringify({
                composition: "Cire de coco et de soja 100% naturelle",
                meche: "Mèche en coton bio",
                parfum: "Fragrance de Grasse",
                combustion: "Combustion",
                poids: "150",
                contenant: "Pot en bêton fait main",
                fabrication: "France",
                }),
                variants: JSON.stringify([
                    { id: 1, name: "Bougie Douceur 150g", duration: "25", price: 19.90 } // sera affiché 25 -30h
                ]),
                stock: true,
                promo: 0,
                like: 0,
            },
            {
                collection: "Emotion",
                name: "Magie",
                slug: "bougie-magie",
                description: JSON.stringify([
                    "Decription 1", 
                    "Description 2"
                ]),
                intro: "Intro",
                theme: JSON.stringify([
                    "Theme 1", // tête
                    "Theme 2", // Coeur
                    "Theme 3" // fond
                ]),
                images: JSON.stringify([
                    "/images/produits/magie.webp",
                    "/images/produits/magie1.webp",
                    "/images/produits/magie3.webp",
                    "/images/produits/magie4.webp"
                ]),
                caracteristique: JSON.stringify({
                composition: "Cire de coco et de soja 100% naturelle",
                meche: "Mèche en coton bio",
                parfum: "Fragrance de Grasse",
                combustion: "Combustion",
                poids: "150",
                contenant: "Pot en bêton fait main",
                fabrication: "France",
                }),
                variants: JSON.stringify([
                    { id: 1, name: "Bougie Magie 150g", duration: "25", price: 19.90 } // sera affiché 25 -30h
                ]),
                stock: true,
                promo: 0,
                like: 0,
            },
            {
                collection: "Emotion",
                name: "Harmonie",
                slug: "bougie-harmonie",
                description: JSON.stringify([
                    "Decription 1", 
                    "Description 2"
                ]),
                intro: "Intro",
                theme: JSON.stringify([
                    "Theme 1", // tête
                    "Theme 2", // Coeur
                    "Theme 3" // fond
                ]),
                images: JSON.stringify([
                    "/images/produits/harmonie(1).webp",
                    "/images/produits/harmonie(2).webp",
                    "/images/produits/harmonie(3).webp",
                    "/images/produits/harmonie(4).webp"
                ]),
                caracteristique: JSON.stringify({
                composition: "Cire de coco et de soja 100% naturelle",
                meche: "Mèche en coton bio",
                parfum: "Fragrance de Grasse",
                combustion: "Combustion",
                poids: "150",
                contenant: "Pot en bêton fait main",
                fabrication: "France",
                }),
                variants: JSON.stringify([
                    { id: 1, name: "Bougie Harmonie 150g", duration: "25", price: 19.90 } // sera affiché 25 -30h
                ]),
                stock: true,
                promo: 0,
                like: 0,
            },
            {
                collection: "Terre",
                name: "Ancrage",
                slug: "bougie-ancrage",
                description: JSON.stringify([
                    "Decription 1", 
                    "Description 2"
                ]),
                intro: "Intro",
                theme: JSON.stringify([
                    "Theme 1", // tête
                    "Theme 2", // Coeur
                    "Theme 3" // fond
                ]),
                images: JSON.stringify([
                    "/images/produits/ancrage.webp",
                    "/images/produits/ancrage2.webp",
                    "/images/produits/ancrage3.webp",
                    "/images/produits/ancrage4.webp",
                    "/images/produits/ancrage5.webp",
                ]),
                caracteristique: JSON.stringify({
                composition: "Cire de coco et de soja 100% naturelle",
                meche: "Mèche en coton bio",
                parfum: "Fragrance de Grasse",
                combustion: "Combustion",
                poids: "200",
                contenant: "Pot en bêton fait main",
                fabrication: "France",
                }),
                variants: JSON.stringify([
                    { id: 1, name: "Bougie Ancrage 200g", duration: "30", price: 32 } // sera affiché 25 -30h
                ]),
                stock: true,
                promo: 0,
                like: 0,
            },
            {
                collection: "Terre",
                name: "Introspection",
                slug: "bougie-introspection",
                description: JSON.stringify([
                    "Decription 1", 
                    "Description 2"
                ]),
                intro: "Intro",
                theme: JSON.stringify([
                    "Theme 1", // tête
                    "Theme 2", // Coeur
                    "Theme 3" // fond
                ]),
                images: JSON.stringify([
                    "/images/produits/introspection.webp",
                    "/images/produits/introspection2.webp",
                    "/images/produits/introspection3.webp",
                    "/images/produits/introspection4.webp",
                    "/images/produits/introspection5.webp",
                ]),
                caracteristique: JSON.stringify({
                composition: "Cire de coco et de soja 100% naturelle",
                meche: "Mèche en coton bio",
                parfum: "Fragrance de Grasse",
                combustion: "Combustion",
                poids: "200",
                contenant: "Pot en bêton fait main",
                fabrication: "France",
                }),
                variants: JSON.stringify([
                    { id: 1, name: "Bougie Introspection 200g", duration: "30", price: 32 } // sera affiché 25 -30h
                ]),
                stock: true,
                promo: 0,
                like: 0,
            },
            {
                collection: "Terre",
                name: "Libération",
                slug: "bougie-liberation",
                description: JSON.stringify([
                    "Decription 1", 
                    "Description 2"
                ]),
                intro: "Intro",
                theme: JSON.stringify([
                    "Theme 1", // tête
                    "Theme 2", // Coeur
                    "Theme 3" // fond
                ]),
                images: JSON.stringify([
                    "/images/produits/liberation.webp",
                    "/images/produits/liberation2.webp",
                    "/images/produits/liberation3.webp",
                    "/images/produits/liberation4.webp",
                    "/images/produits/liberation5.webp",
                ]),
                caracteristique: JSON.stringify({
                composition: "Cire de coco et de soja 100% naturelle",
                meche: "Mèche en coton bio",
                parfum: "Fragrance de Grasse",
                combustion: "Combustion",
                poids: "200",
                contenant: "Pot en bêton fait main",
                fabrication: "France",
                }),
                variants: JSON.stringify([
                    { id: 1, name: "Bougie Libération 200g", duration: "30", price: 32 } // sera affiché 25 -30h
                ]),
                stock: true,
                promo: 0,
                like: 0,
            },
            {
                collection: "Terre",
                name: "Protection",
                slug: "bougie-protection",
                description: JSON.stringify([
                    "Decription 1", 
                    "Description 2"
                ]),
                intro: "Intro",
                theme: JSON.stringify([
                    "Theme 1", // tête
                    "Theme 2", // Coeur
                    "Theme 3" // fond
                ]),
                images: JSON.stringify([
                    "/images/produits/protection.webp",
                    "/images/produits/protection2.webp",
                    "/images/produits/protection3.webp",
                    "/images/produits/protection4.webp",
                    "/images/produits/protection5.webp",
                ]),
                caracteristique: JSON.stringify({
                composition: "Cire de coco et de soja 100% naturelle",
                meche: "Mèche en coton bio",
                parfum: "Fragrance de Grasse",
                combustion: "Combustion",
                poids: "200",
                contenant: "Pot en bêton fait main",
                fabrication: "France",
                }),
                variants: JSON.stringify([
                    { id: 1, name: "Bougie Protection 200g", duration: "30", price: 32 } // sera affiché 25 -30h
                ]),
                stock: true,
                promo: 0,
                like: 0,
            },
        ],
    });

  console.log("✅ Seed terminé !");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });