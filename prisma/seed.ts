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
                intro: "Intro 1",
                theme: JSON.stringify([
                    "Theme 1", 
                    "Theme 2"
                ]),
                images: JSON.stringify([
                    "/images/produits/tendresse.webp",
                    "/images/produits/tendresse2.webp",
                    "/images/produits/tendresse3.webp",
                    "/images/produits/tendresse4.webp"
                ]),
                caracteristique: JSON.stringify({
                composition: "Composition",
                meche: "Meche",
                parfum: "Parfum",
                combustion: "Combustion",
                poids: "Poids",
                contenant: "Contenant",
                fabrication: "France",
                }),
                variants: JSON.stringify([
                    { id: 1, name: "Bougie", duration: "30 - 35", price: 29 }
                ]),
                stock: true,
                promo: 0,
                like: 0,
            },
        ],
    });

  // --- ShippingPrices ---
  await prisma.shippingPrice.createMany({
    data: [
      { name: "France", zone: "FR", price: 5.5, active: true },
      { name: "Europe", zone: "EU", price: 12, active: true },
      { name: "Express", zone: "WORLD", price: 25, active: true },
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