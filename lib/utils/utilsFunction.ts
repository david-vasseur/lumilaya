import { AddShippingPrice } from "@/app/components/features/form/CheckOut.action";
import { IProduct } from "@/type/product";


export function transformProduct(p: any): IProduct {
	return {
		...p,
		description: Array.isArray(p.description) ? p.description : null,
		theme: Array.isArray(p.theme) ? p.theme : [],
		images: Array.isArray(p.images) ? p.images : [],
		caracteristique: {
		composition: p.caracteristique?.composition ?? "",
		meche: p.caracteristique?.meche ?? "",
		parfum: p.caracteristique?.parfum ?? "",
		combustion: p.caracteristique?.combustion ?? "",
		poids: p.caracteristique?.poids ?? "",
		contenant: p.caracteristique?.contenant ?? "",
		fabrication: p.caracteristique?.fabrication ?? "",
		},
		variants: Array.isArray(p.variants) ? p.variants : [],
		promo: p.promo ?? null,
		like: p.like ?? null,
	};
}

