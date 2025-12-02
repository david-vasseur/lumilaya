import { IProduct } from "@/type/product";
import ProductList from "../components/actions/product.action";
import EmotionPage from "../components/layout/pages/EmotionPage";


async function BougiesNaturelles() {

	const products = await ProductList("Emotion");

	

	if (!products) return

	return (
		<EmotionPage products={products} />
	);
}

export default BougiesNaturelles;
