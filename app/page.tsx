import Bento from "./components/layout/Bento";
import { HeroSection } from "./components/layout/HeroSection";
import { FAQSection } from "./components/layout/Faq2";
import { ReviewsSection } from "./components/layout/ReviewSection";
import BestProducts from "./components/layout/BestProducts";
import TestSavoir from "./components/layout/TestSavoir";

export default async function Home() {

	return (
		<>
			<HeroSection />
			<TestSavoir />
			<Bento />
			<BestProducts />
			<ReviewsSection />
			<FAQSection />
		</>
	);
}
