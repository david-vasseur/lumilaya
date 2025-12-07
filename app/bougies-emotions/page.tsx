import { IProduct } from "@/type/product";
import ProductList from "../components/actions/product.action";
import EmotionPage from "../components/layout/pages/EmotionPage";

export const dynamic = "force-dynamic";


export async function generateMetadata() {
	const products: IProduct[] = await ProductList("Emotion");

	if (!products || products.length === 0) {
		return {
			title: "Bougies Émotion - Lumilaya",
			description: "Découvrez notre collection de bougies artisanales inspirées par les émotions. Fabrication 100% française, parfum naturel, artisanat haut de gamme.",
		};
	}

	return {
		title: `Bougies Émotions & Plaisirs | Lumilaya`,
		description: `Explorez notre collection de bougies artisanales "Emotions & Plaisirs". Nos bougies sont 100% naturelles, fabriquées en France et parfaites pour éveiller vos émotions.`,
		openGraph: {
			title: `Bougies Émotion & Plaisirs | Lumilaya`,
			description: `Découvrez nos bougies de la collection: Emotions & Plaisirs. Fabrication française, ingrédients naturels, parfum unique.`,
			type: "website",
			url: "https://www.lumilaya.fr/bougies-emotions",
			images: [
				{
					url: "https://www.lumilaya.fr/images/produits/plaisir.webp",
					width: 800,
					height: 600,
					alt: "Bougie Émotion - Plaisir"
				}
			]
		},
		twitter: {
			card: "summary_large_image",
			title: `Bougies Émotion & Plaisirs | Lumilaya`,
			description: `Nos bougies fait main vous offrent une expérience sensorielle unique. Découvrez la collection Emotions & Plaisirs dès maintenant.`,
			images: ["https://www.lumilaya.fr/images/produits/plaisir.webp"],
		},
	};
}

async function BougiesEmotions() {
	const products = await ProductList("Emotion");

	if (!products) return null;

	return <EmotionPage products={products} />;
}

export default BougiesEmotions;
