import { IProduct } from "@/type/product";
import ProductList from "../components/actions/product.action";
import RituelPage from "../components/layout/pages/RituelPage";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
	const products: IProduct[] = await ProductList("Emotion");

	if (!products || products.length === 0) {
		return {
			title: "Bougies entre Terre & Ciel - Lumilaya",
			description: "Découvrez notre collection de bougies artisanales inspirées par les émotions. Fabrication 100% française, parfum naturel, artisanat haut de gamme.",
		};
	}

	return {
		title: `Bougies Entre Terre & Ciel | Lumilaya`,
		description: `Explorez notre collection de bougies artisanales "Entre Terre & Ciel". Nos bougies sont 100% naturelles, fabriquées en France et parfaites pour éveiller vos émotions.`,
		openGraph: {
			title: `Bougies Entre Terre & Ciel | Lumilaya`,
			description: `Découvrez nos bougies de la collection: Entre Terre & Ciel. Fabrication française, ingrédients naturels, parfum unique.`,
			type: "website",
			url: "https://www.lumilaya.fr/bougies-rituel",
			images: [
				{
					url: "https://www.lumilaya.fr/images/produits/terre.webp",
					width: 800,
					height: 600,
					alt: "Bougie Émotion - Rituel"
				}
			]
		},
		twitter: {
			card: "summary_large_image",
			title: `Bougies Entre Terre & Ciel | Lumilaya`,
			description: `Nos bougies fait main vous offrent une expérience sensorielle unique. Découvrez la collection Entre Terre & Ciel dès maintenant.`,
			images: ["https://www.lumilaya.fr/images/produits/terre.webp"],
		},
	};
}

async function BougiesRituels() {

	const products = await ProductList("Terre");	

	if (!products) return

	return (
		<RituelPage products={products} />
	);
}

export default BougiesRituels;