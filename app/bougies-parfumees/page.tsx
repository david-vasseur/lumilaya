import ProductList from "../components/actions/product.action";
import EmotionPage from "../components/layout/pages/EmotionPage";


async function BougiesNaturelles() {

	const products = await ProductList("Terre");

	

	if (!products) return

	return (
		<EmotionPage products={products} />
	);
}

export default BougiesNaturelles;