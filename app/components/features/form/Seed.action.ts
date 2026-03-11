"use server"

import { prisma } from "@/lib/prisma/prisma";


export async function seedProduct() {
    await prisma.shippingPrice.create({
        data: {
            name: "Pologne - Relais Colis",      
            zone: "PL",      
            price: 8.1 
        }
  });

  await prisma.$disconnect();
}
