"use server"

import { PrismaClient } from "@/lib/generated/prisma/client";
import { transformProduct } from "@/lib/utils/utilsFunction";
import { IProduct } from "@/type/product";

const prisma = new PrismaClient();

interface IItem {
    id: number;
    name: string;
    price: number;
    qty: number;
    image: string;
};

type ServerItem = {
  productId: string;  // ✅ ObjectId du produit
  variantId: number;
  name: string;  // ✅ 11, 12, 21, etc.
  qty: number;
};

type PricePerProduct = {
  productId: string;
  variantId: number;
  name: string;
  price: number; // prix unitaire avec promo appliquée
  qty: number;
};

type Variant = { price: number };

// -------------------------------------------------------------------------------------------------------------------

export async function GetItemBySlug(slug: string) {
	try {
		if (!slug) return null;

		// Récupération du produit principal
		const productRaw = await prisma.product.findUnique({
		where: { slug },
		});

		if (!productRaw) return null;

		const product = transformProduct(productRaw);

		// Suggestions
		const rawSuggests = await prisma.product.findMany({
		where: {
			collection: product.collection,
			NOT: { id: product.id },
		},
		});

		const suggests = rawSuggests.map((p) => {
		const images = Array.isArray(p.images) ? (p.images as string[]) : [];
		const variants = Array.isArray(p.variants)
			? (p.variants as { price: number }[])
			: [];

		return {
			name: p.name,
			slug: p.slug,
			image: images[0] ?? null,
			price: variants.length > 0 ? variants[0].price : null,
		};
		});

		return { product, suggests };
	} catch (err: any) {
		console.error("❌ Erreur dans GetItemBySlug :", err?.message ?? err);
		return { product: null, suggests: [] }
	}
}

//-------------------------------------------------------------------------------------

export async function GetFavoriteProducts(ids: string[]) {
	if (!ids.length) return [];
	try {
		const products = await prisma.product.findMany({
			where: { 
				id: { 
					in: ids
				}
			}
		});
		return products
	} catch (err) {
		console.error("❌ Erreur dans GetFavoriteProducts :", err);
		return [];
	}
}


//-------------------------------------------------------------------------------------

export default async function ProductList(collection: string) {
	try {
		if (!collection) return [];

		const products = await prisma.product.findMany({
		where: { collection },
		});

		return products.map((p) => ({
			id: p.id,
			collection: p.collection,
			name: p.name,
			slug: p.slug,
			description: Array.isArray(p.description) ? (p.description as string[]) : [],
			intro: p.intro,
			theme: Array.isArray(p.theme) ? (p.theme as string[]) : [],
			images: Array.isArray(p.images) ? (p.images as string[]) : [],
			caracteristique: {
				...(p.caracteristique as {
				composition: string;
				meche: string;
				parfum: string;
				combustion: string;
				poids: string;
				contenant: string;
				fabrication: string;
				}),
			},
			variants: Array.isArray(p.variants)
				? (p.variants as { id: number; name: string; duration: string; price: number }[])
				: [],
			stock: p.stock,
			promo: p.promo ?? 0,
			like: p.like ?? 0,
			createdAt: p.createdAt,
		}));
	} catch (err: any) {
		console.error("❌ Erreur dans ProductList :", err?.message ?? err);
		return [];
	}
}

//-------------------------------------------------------------------------------------

export async function TopRatedProducts() {
	try {
		const products = await prisma.product.findMany({
		orderBy: {
			like: "desc", 
		},
		take: 3, 
		});

		return products.map((p) => ({
		id: p.id,
		collection: p.collection,
		name: p.name,
		slug: p.slug,
		description: Array.isArray(p.description) ? (p.description as string[]) : [],
		intro: p.intro,
		theme: Array.isArray(p.theme) ? (p.theme as string[]) : [],
		images: Array.isArray(p.images) ? (p.images as string[]) : [],
		caracteristique: {
			...(p.caracteristique as {
			composition: string;
			meche: string;
			parfum: string;
			combustion: string;
			poids: string;
			contenant: string;
			fabrication: string;
			}),
		},
		variants: Array.isArray(p.variants)
			? (p.variants as { id: number; name: string; duration: string; price: number }[])
			: [],
		stock: p.stock,
		promo: p.promo ?? 0,
		like: p.like ?? 0,
		createdAt: p.createdAt,
		}));
	} catch (err: any) {
		console.error("❌ Erreur dans TopRatedProducts :", err?.message ?? err);
		return []; 
	}
}

//---------------------------------------------------------------------------------------------------------

export async function TotalProduct(items: ServerItem[]): Promise<number> {
	try {
		if (!items || items.length === 0) return 0;

		const productIds = items
		.map((item) => item.productId)
		.filter((id) => typeof id === "string");

		if (productIds.length === 0) return 0;

		const products = await prisma.product.findMany({
		where: { id: { in: productIds } },
		select: {
			id: true,
			variants: true,
			promo: true,
		},
		});

		let total = 0;

		for (const item of items) {
		const product = products.find((p) => p.id === item.productId);
		if (!product) continue;

		const variants = Array.isArray(product.variants)
			? (product.variants as { id: number; price: number }[])
			: [];
		const variant = variants.find((v) => v.id === item.variantId);
		if (!variant) continue;

		const price =
			product.promo && product.promo !== 0
			? variant.price * (1 - product.promo / 100)
			: variant.price;

		total += price * item.qty;
		}

		return total;
	} catch (err: any) {
		console.error("❌ Erreur dans TotalProduct :", err?.message ?? err);
		return 0;
	}
}

// --------------------------------------------------------------------------------------------------------

export async function getPricesForStripe(items: ServerItem[]): Promise<PricePerProduct[]> {
	try {
		if (!items || items.length === 0) return [];

		const productIds = items.map((i) => i.productId).filter((id) => typeof id === "string");
		if (productIds.length === 0) return [];

		const products = await prisma.product.findMany({
		where: { id: { in: productIds } },
		select: {
			id: true,
			name: true,
			variants: true,
			promo: true,
		},
		});

		const result: PricePerProduct[] = [];

		for (const item of items) {
		const product = products.find((p) => p.id === item.productId);
		if (!product) continue;

		const variants = Array.isArray(product.variants)
			? (product.variants as { id: number; price: number }[])
			: [];
		const variant = variants.find((v) => v.id === item.variantId);
		if (!variant) continue;

		const finalPrice =
			product.promo && product.promo !== 0
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
	} catch (err: any) {
		console.error("❌ Erreur dans getPricesForStripe :", err?.message ?? err);
		return []; 
	}
}


