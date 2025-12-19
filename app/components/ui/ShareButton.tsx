"use client";

import { IProduct } from "@/type/product";
import { Share2 } from "lucide-react";
import toast from "react-hot-toast";

export default function ShareButton({ product }: { product: IProduct }) {

    const url = `${process.env.NEXT_PUBLIC_SITE_URL}/${
        product.collection === "terre"
        ? "bougie-rituel"
        : "bougies-emotions"
    }/${product.slug}`;

    const handleShare = async () => {
        if (navigator.share) {
        try {
            await navigator.share({
            title: `${product.name} - LumiLaya`,
            text: `Découvre cette ${product.name}`,
            url,
            });
        } catch {
            
        }
        } else {
        try {
            await navigator.clipboard.writeText(url);
            toast.success("Lien copié dans le presse-papiers");
        } catch {
            toast.error("Impossible de copier le lien");
        }
        }
    };

    return (
        <button
            onClick={handleShare}
            className="flex-1 border-2 border-[#2C2C2C]/10 text-[#2C2C2C] py-3 rounded-lg hover:border-[#7A9B8E] hover:text-[#7A9B8E] transition-all flex items-center justify-center gap-2"
        >
            <Share2 className="w-5 h-5" />
            Partager
        </button>
    );
}
