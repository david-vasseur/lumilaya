import ProductList from "../components/actions/product.action";
import RituelPage from "../components/layout/pages/RituelPage";


async function BougiesNaturelles() {

	const products = await ProductList("Terre");

	

	if (!products) return

	return (
		<RituelPage products={products} />
	);
}

export default BougiesNaturelles;