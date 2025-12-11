"use server"

import { PrismaClient } from "@/lib/generated/prisma/client";
import crypto from "crypto";

const prisma = new PrismaClient();

export async function logVisit(path: string, ip?: string, userAgent?: string) {
  try {
    const ipHash = ip ? crypto.createHash("sha256").update(ip).digest("hex") : null;

    await prisma.visitLog.create({
      data: {
        path,
        userAgent,
        ipHash,
      },
    });
  } catch (err) {
    console.error("Erreur logVisit:", err);
  }
}