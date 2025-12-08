"use server"

import { PrismaClient } from "@/lib/generated/prisma/client";

const prisma = new PrismaClient();

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
