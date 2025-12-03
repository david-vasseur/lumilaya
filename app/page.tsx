import Bento from "./components/layout/Bento";
import Best from "./components/layout/Best";
import Faq from "./components/layout/Faq";
import { HeroSection } from "./components/layout/HeroSection";
import ProductList from './components/actions/product.action';
import { FAQSection } from "./components/layout/Faq2";

export default async function Home() {

	return (
		<>
			<HeroSection />
			<Bento />
			<Best />
			<FAQSection />
		</>
	);
}
