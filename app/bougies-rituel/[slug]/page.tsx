
import ProductList, { GetItemBySlug } from '@/app/components/actions/product.action';
import EmotionSlug from '@/app/components/layout/pages/EmotionSlug';

interface Props {
  	params: { slug: string };
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