import { ReviewToSend } from '../../../types/review';

const REVIEW_MIN_LENGTH = 50;
const REVIEW_MAX_LENGTH = 300;

export type ReviewForm = HTMLFormElement & {
  rating: RadioNodeList;
  review: HTMLTextAreaElement;
};

const shouldDisableForm = (form: ReviewForm): boolean => {
  const rating = form.rating.value;
  const review = form.review.value;
  return (
    review.length < REVIEW_MIN_LENGTH ||
    review.length > REVIEW_MAX_LENGTH ||
    !rating
  );
};

const normalizeToReviewToSend = (
  form: ReviewForm,
  offerId: string
): ReviewToSend => ({
  offerId,
  body: {
    comment: form.review.value,
    rating: +form.rating.value,
  },
});

export { shouldDisableForm, normalizeToReviewToSend };
