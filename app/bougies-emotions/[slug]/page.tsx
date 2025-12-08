
import ProductList, { GetItemBySlug } from '@/app/components/actions/product.action';
import EmotionSlug from '@/app/components/layout/pages/EmotionSlug';
import { IProduct } from '@/type/product';

interface Props {
  	params: { slug: string };
}

export async function generateMetadata({ params }: Props) {
	const products: IProduct[] = await ProductList("Emotion");
	const { slug } = await params;
	const product = products.find(product => product.slug === slug );

	if (!products || products.length === 0) {
		return {
		title: "Bougies Émotion - Lumilaya",
		description: "Découvrez notre collection de bougies artisanales inspirées par les émotions. Fabrication 100% française, parfum naturel, artisanat haut de gamme.",
		};
	}


	return {
		title: `Bougies Émotion - ${product?.name} | Lumilaya`,
		description: `Explorez notre collection de bougies artisanales "Emotions & Plaisirs". Nos bougies "${product?.name}" sont 100% naturelles, fabriquées en France et parfaites pour éveiller vos émotions.`,
		openGraph: {
			title: `Bougies Émotion - ${product?.name} | Lumilaya`,
			description: `Découvrez nos bougies artisanales "Emotions & Plaisirs" : ${product?.name}. Fabrication française, ingrédients naturels, parfum unique.`,
			type: "website",
			url: `https://www.lumilaya.fr/bougies-emotions/${product?.slug}`,
			images: `https://www.lumilaya.fr/${product?.images[0]}`
		},
		twitter: {
			card: "summary_large_image",
			title: `Bougies Émotion - ${product?.name} | Lumilaya`,
			description: `Nos bougies artisanales "Emotions & Plaisirs" vous offrent une expérience sensorielle unique. Découvrez "${product?.name}" dès maintenant.`,
			images: `https://www.lumilaya.fr/${product?.images[0]}`,
		},
	};
}

async function ProductDetail({ params }: Props) {
	
	const { slug } = await params;
	const result = await GetItemBySlug(slug);	

	if (!result) return

	const { product, suggests } = result;

	return (
		<EmotionSlug product={product} suggest={suggests} />
	);
}
export default ProductDetail;