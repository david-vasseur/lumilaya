import { PrismaClient } from "@/lib/generated/prisma/client";

const prisma = new PrismaClient();

async function main() {
  // --- Products ---
    await prisma.product.createMany({
        data: [
            {
                collection: "Emotion",
                name: "Bougie tendresse",
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