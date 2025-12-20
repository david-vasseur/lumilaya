"use client"

import React from "react";
import Link from "next/link";
import { Star } from "lucide-react";
import { getAverageRating, getReviewCount } from "../actions/review.action";
import { useModalStore } from "@/lib/store/modalStore";
import ReviewForm from "../features/form/ReviewForm";

type ReviewSummaryProps = {
    productId: string;
    productName: string;
};

const ReviewSummary: React.FC<ReviewSummaryProps> = async ({ productId, productName }) => {
    const averageRating = await getAverageRating(productId);
    const reviewCount = await getReviewCount(productId);
    const { openModal } = useModalStore();
    const fullStars = Math.floor(averageRating);

    return (
        <div className="flex items-center gap-4 mb-6">
            {/* ***** (5 avis) → Link SEO */}
            <Link
                href={`/avis/${encodeURIComponent(productName)}`}
                className="flex items-center gap-1 text-[#2C2C2C] hover:underline"
            >
                {[...Array(5)].map((_, i) => (
                <Star
                    key={i}
                    className={`w-5 h-5 ${
                    i < fullStars ? "fill-[#7A9B8E] text-[#7A9B8E]" : "fill-[#E5E5E5] text-[#E5E5E5]"
                    }`}
                />
                ))}
                <span className="ml-2 text-[#2C2C2C]/60">({reviewCount} avis)</span>
            </Link>

            {/* Laisser un commentaire → ouverture modal */}
            <div
                onClick={() =>
                openModal(
                    <ReviewForm productId={productId} productName={productName} />
                )
                }
                className="text-[#7A9B8E] cursor-pointer underline"
            >
                Laisser un commentaire
            </div>
        </div>
    );
};

export default ReviewSummary;
