import Bento from "./components/layout/Bento";
import Best from "./components/layout/Best";
import Faq from "./components/layout/Faq";
import { HeroSection } from "./components/layout/HeroSection";
import ProductList from './components/actions/product.action';
import { FAQSection } from "./components/layout/Faq2";
import SavoirFaire from "./components/layout/Savoir";
import { ReviewsSection } from "./components/layout/ReviewSection";
import BestProducts from "./components/layout/BestProducts";

export default async function Home() {

	return (
		<>
			<HeroSection />
			<SavoirFaire />
			<Bento />
			<BestProducts />
			<ReviewsSection />
			<FAQSection />
		</>
	);
}
