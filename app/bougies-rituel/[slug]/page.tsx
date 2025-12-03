
import ProductList from '@/app/components/actions/product.action';
import EmotionSlug from '@/app/components/layout/pages/EmotionSlug';
import RituelSlug from '@/app/components/layout/pages/RituelSlug';

async function ProductDetail() {

	const products = await ProductList("Terre");

	if (!products) return

	return (
		<RituelSlug products={products} />
	);
}
export default ProductDetail;