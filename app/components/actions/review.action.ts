"use server"

import { PrismaClient } from "@/lib/generated/prisma/client";

const prisma = new PrismaClient();

/**
 * 1️⃣ Créer un commentaire avec note
 */
export async function createReview({
  productId,
  name,
  comment,
  note,
}: {
  productId: string;
  name: string;
  comment: string;
  note: number;
}) {
  if (!productId || !name || !comment || note === undefined) {
    throw new Error("Champs manquants");
  }

  if (note < 0 || note > 5) {
    throw new Error("La note doit être comprise entre 0 et 5");
  }

  return prisma.review.create({
    data: {
      productId,
      name,
      comment,
      note,
    },
  });
}

/**
 * 2️⃣ Récupérer tous les commentaires d’un produit
 */
export async function getReviewsByProduct(productId: string) {
  if (!productId) {
    throw new Error("productId requis");
  }

  return prisma.review.findMany({
    where: {
      productId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

/**
 * 3️⃣ Récupérer un commentaire par son id
 */
export async function getReviewById(reviewId: string) {
  if (!reviewId) {
    throw new Error("reviewId requis");
  }

  return prisma.review.findUnique({
    where: {
      id: reviewId,
    },
  });
}

export async function getAverageRating(productId: string) {
  const result = await prisma.review.aggregate({
    where: { productId },
    _avg: { note: true },
  });

  return result._avg.note ?? 0;
}

export async function getReviewCount(productId: string) {
  return prisma.review.count({
    where: { productId },
  });
}


