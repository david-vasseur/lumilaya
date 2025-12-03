// "use server"

// import { PrismaClient } from "@/lib/generated/prisma/client";

// const prisma = new PrismaClient();

// export async function seedProduct() {
//   await prisma.product.create({
//     data: {
//       collection: "Terre",
//       name: "Protection",
//         slug: "bougie-protection",
//         description: [
//             "Pensée comme un rituel puissant, cette bougie crée un sanctuaire intérieur et purifie l’espace autour de soi. Ses notes boisées de santal, les effluves sacrés de l’encens et la douceur apaisante de lavande enveloppent l’atmosphère d’une énergie protectrice, invitant au recentrage et à la sérénité.", 
//             "Au cœur de la bougie, la tourmaline noire diffuse sa puissance contre les énergies négatives, tandis que les fleurs de sauge et de romarin purifient et harmonisent l’espace, renforçant la bulle énergétique qui vous entoure. Parfaite pour les rituels de pleine lune, elle soutient les intentions de protection, de purification et de recentrage, créant un cocon lumineux propice à la sérénité et à la force intérieure."
//         ],
//         intro: "Sécurisante et puissante, 'Protection' enveloppe votre espace d’une énergie bienveillante. Le bois de santal, l’encens et la lavande apaisent, tandis que la tourmaline noire, le romarin et la sauge créent un bouclier contre les influences négatives. Une bougie sélectionnée pour purifier, recentrer et renforcer votre sérénité intérieure.",
//         theme: [
//             "Lavande",
//             "Encens",
//             "Bois de Sental"
//         ],images: [
//             "/images/produits/protection.webp",
//             "/images/produits/protection2.webp",            
//             "/images/produits/protection3.webp",            
//             "/images/produits/protection3.webp",            
//             "/images/produits/protection3.webp"
//         ],
//         caracteristique: {
//             composition: "60% Soja, 40% Coco",
//             meche: "Coton Bio",
//             parfum: "Fragrance de Grasse sans CMR",
//             combustion: "40 - 45",
//             poids: "330",
//             contenant: "Verre recyclable",
//             fabrication: "France, Gard"
//         },
//         variants: [
//             {
//                 id: 8.2,
//                 name: "Bougie Protection 200g",
//                 duration: "45",
//                 price: 29.9
//             }
//         ],
//         stock: true,
//         promo: 0,
//         like: 5
//     }
//   });

//   await prisma.$disconnect();
// }
