"use client"

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { usePathname } from "next/navigation";
import Footer from "./components/layout/Footer";
import { useEffect } from "react";
import { useDeviceStore } from "@/lib/store/deviceStore";
import { Toaster } from "react-hot-toast";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Template = ({ children }: { children: React.ReactNode }) => {

    const pathName = usePathname();
    const { detectDevice, isMobile } = useDeviceStore();

    useEffect(() => {
		const cleanup = detectDevice();
		return cleanup; 
	}, [detectDevice]);

    return (
        <div>            
            {children}
            <Toaster position="top-center" containerStyle={{ marginTop: isMobile ? "5rem" : "0rem", zIndex: 999999999, }} toastOptions={{style: {backgroundColor: "#7A9B8E"}} } />
            <Footer />
        </div>
    )
}

export default Template;