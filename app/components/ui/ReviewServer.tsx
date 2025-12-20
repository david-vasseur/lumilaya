import React from "react";
import { getAverageRating, getReviewCount } from "../actions/review.action";
import ReviewSummary from "./ReviewComponent";

type Props = {
  productId: string;
  productName: string;
};

const ReviewSummaryServer: React.FC<Props> = async ({ productId, productName }) => {
  const averageRating = await getAverageRating(productId);
  const reviewCount = await getReviewCount(productId);

  return (
    <ReviewSummary
      productId={productId}
      productName={productName}
      averageRating={averageRating}
      reviewCount={reviewCount}
    />
  );
};

export default ReviewSummaryServer;
