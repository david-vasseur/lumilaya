"use server"

import { PrismaClient } from "@/lib/generated/prisma/client";
import { IProduct } from "@/type/product";

const prisma = new PrismaClient();

type ServerItem = {
  productId: number;
  variantId: number;
  name: string;
  qty: number;
};

type PricePerProduct = {
  productId: number;
  variantId: number;
  name: string;
  price: number;
  qty: number;
};

// ------------------------------------------------------------

function parseJsonArray<T>(json: any): T[] {
  if (!json) return [];
  if (Array.isArray(json)) return json as T[];
  try {
    return JSON.parse(json) as T[];
  } catch {
    return [];
  }
}

function parseJsonObject<T>(json: any): T {
  if (!json) return {} as T;
  if (typeof json === "object") return json as T;
  try {
    return JSON.parse(json) as T;
  } catch {
    return {} as T;
  }
}

// ---------- Get Item By Slug ----------
export async function GetItemBySlug(slug: string) {
  if (!slug) return null;

  const productRaw = await prisma.product.findUnique({ where: { slug } });
  if (!productRaw) return null;

  const product: IProduct = {
    id: productRaw.id,
    collection: productRaw.collection,
    name: productRaw.name,
    slug: productRaw.slug,
    description: parseJsonArray<string>(productRaw.description),
    intro: productRaw.intro,
    theme: parseJsonArray<string>(productRaw.theme),
    images: parseJsonArray<string>(productRaw.images),
    caracteristique: parseJsonObject(productRaw.caracteristique),
    variants: parseJsonArray<{ id: number; name: string; duration: any; price: number }>(productRaw.variants)
      .map(v => ({
        ...v,
        duration: String(v.duration), // ⚡ force string
      })),
    stock: productRaw.stock,
    promo: productRaw.promo ?? 0,
    like: productRaw.like ?? 0,
    createdAt: productRaw.createdAt,
  };

  // Suggestions
  const rawSuggests = await prisma.product.findMany({
    where: { collection: product.collection, NOT: { id: product.id } },
  });

  const suggests = rawSuggests.map(p => {
    const images = parseJsonArray<string>(p.images);
    const variants = parseJsonArray<{ id: number; name: string; duration: any; price: number }>(p.variants)
      .map(v => ({ ...v, duration: String(v.duration) }));
    return {
      name: p.name,
      slug: p.slug,
      image: images[0] ?? null,
      price: variants.length > 0 ? variants[0].price : null,
    };
  });

  return { product, suggests };
}

// ---------- Get Favorite Products ----------
export async function GetFavoriteProducts(ids: number[]) {
  if (!ids.length) return [];

  const productsRaw = await prisma.product.findMany({ where: { id: { in: ids } } });
  return productsRaw.map(p => ({
    id: p.id,
    collection: p.collection,
    name: p.name,
    slug: p.slug,
    description: parseJsonArray<string>(p.description),
    intro: p.intro,
    theme: parseJsonArray<string>(p.theme),
    images: parseJsonArray<string>(p.images),
    caracteristique: parseJsonObject(p.caracteristique),
    variants: parseJsonArray<{ id: number; name: string; duration: any; price: number }>(p.variants)
      .map(v => ({ ...v, duration: String(v.duration) })),
    stock: p.stock,
    promo: p.promo ?? 0,
    like: p.like ?? 0,
    createdAt: p.createdAt,
  }));
}

// ---------- Product List by Collection ----------
export default async function ProductList(collection: string): Promise<IProduct[]> {
  if (!collection) return [];

  const productsRaw = await prisma.product.findMany({ where: { collection } });
  return productsRaw.map(p => ({
    id: p.id,
    collection: p.collection,
    name: p.name,
    slug: p.slug,
    description: parseJsonArray<string>(p.description),
    intro: p.intro,
    theme: parseJsonArray<string>(p.theme),
    images: parseJsonArray<string>(p.images),
    caracteristique: parseJsonObject(p.caracteristique),
    variants: parseJsonArray<{ id: number; name: string; duration: any; price: number }>(p.variants)
      .map(v => ({ ...v, duration: String(v.duration) })),
    stock: p.stock,
    promo: p.promo ?? 0,
    like: p.like ?? 0,
    createdAt: p.createdAt,
  }));
}

// ---------- Top Rated Products ----------
export async function TopRatedProducts(): Promise<IProduct[]> {
  const productsRaw = await prisma.product.findMany({
    orderBy: { like: "desc" },
    take: 3,
  });

  return productsRaw.map(p => ({
    id: p.id,
    collection: p.collection,
    name: p.name,
    slug: p.slug,
    description: parseJsonArray<string>(p.description),
    intro: p.intro,
    theme: parseJsonArray<string>(p.theme),
    images: parseJsonArray<string>(p.images),
    caracteristique: parseJsonObject(p.caracteristique),
    variants: parseJsonArray<{ id: number; name: string; duration: any; price: number }>(p.variants)
      .map(v => ({ ...v, duration: String(v.duration) })),
    stock: p.stock,
    promo: p.promo ?? 0,
    like: p.like ?? 0,
    createdAt: p.createdAt,
  }));
}

// ---------- Total Price Calculation ----------
export async function TotalProduct(items: ServerItem[]): Promise<number> {
  if (!items?.length) return 0;

  const productIds = items.map(i => i.productId);
  if (!productIds.length) return 0;

  const productsRaw = await prisma.product.findMany({
    where: { id: { in: productIds } },
    select: { id: true, variants: true, promo: true },
  });

  let total = 0;
  for (const item of items) {
    const product = productsRaw.find(p => p.id === item.productId);
    if (!product) continue;

    const variants = parseJsonArray<{ id: number; price: number }>(product.variants);
    const variant = variants.find(v => v.id === item.variantId);
    if (!variant) continue;

    const price = product.promo && product.promo !== 0
      ? variant.price * (1 - product.promo / 100)
      : variant.price;

    total += price * item.qty;
  }

  return total;
}

// ---------- Prices for Stripe ----------
export async function getPricesForStripe(items: ServerItem[]): Promise<PricePerProduct[]> {
  if (!items?.length) return [];

  const productIds = items.map(i => i.productId);
  if (!productIds.length) return [];

  const productsRaw = await prisma.product.findMany({
    where: { id: { in: productIds } },
    select: { id: true, name: true, variants: true, promo: true },
  });

  const result: PricePerProduct[] = [];
  for (const item of items) {
    const product = productsRaw.find(p => p.id === item.productId);
    if (!product) continue;

    const variants = parseJsonArray<{ id: number; price: number }>(product.variants);
    const variant = variants.find(v => v.id === item.variantId);
    if (!variant) continue;

    const finalPrice = product.promo && product.promo !== 0
      ? variant.price * (1 - product.promo / 100)
      : variant.price;

    result.push({
      productId: item.productId,
      variantId: item.variantId,
      name: item.name || product.name,
      price: finalPrice,
      qty: item.qty,
    });
  }

  return result;
}