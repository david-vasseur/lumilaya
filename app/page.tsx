import Bento from "./components/layout/Bento";
import Best from "./components/layout/Best";
import Faq from "./components/layout/Faq";
import { HeroSection } from "./components/layout/HeroSection";

export default function Home() {
	return (
		<>
			<HeroSection />
			<Bento />
			<Best />
			<Faq />
		</>
	);
}
