
import { getAverageRating, getReviewCount } from "../actions/review.action";
import ReviewSummaryClient from "./ReviewComponent";

type Props = { productId: string; productName: string };

const ReviewSummaryServer = async ({ productId, productName }: Props) => {
  const averageRating = await getAverageRating(productId);
  const reviewCount = await getReviewCount(productId);

  return (
    <ReviewSummaryClient
      productId={productId}
      productName={productName}
      averageRating={averageRating}
      reviewCount={reviewCount}
    />
  );
};

export default ReviewSummaryServer;

