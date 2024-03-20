import { REVIEWS_LIMIT } from '../../../constants/const';
import { Review } from '../../../types/review';
import { sortReviewDate } from '../../../utils/function';
import ReviewsItem from '../reviews-item/reviews-item';

type ReviewsListProps = {
  reviews: Review[];
}

function ReviewsList({ reviews }: ReviewsListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews
        .sort(sortReviewDate)
        .slice(0,REVIEWS_LIMIT)
        .map((review) => (
          <ReviewsItem key={review.id} {...review}/>
        ))}
    </ul>
  );
}

export default ReviewsList;
