
import ProductList from '@/app/components/actions/product.action';
import EmotionSlug from '@/app/components/layout/pages/EmotionSlug';

async function ProductDetail() {

	const products = await ProductList("Emotion");

	if (!products) return

	return (
		<EmotionSlug products={products} />
	);
}
export default ProductDetail;