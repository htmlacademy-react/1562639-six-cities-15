import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks/store';
import { useAuth } from '../../hooks/useAuth';
import { reviewsSelectors } from '../../store/slices/reviews';
import ReviewsForm from './reviews-form/reviews-form';
import ReviewsList from './reviews-list/reviews-list';

export function Reviews(): JSX.Element {
  const reviews = useAppSelector(reviewsSelectors.reviews);
  const isAuthorized = useAuth();
  const { id } = useParams() as {id: string};
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ReviewsList />
      {isAuthorized ? <ReviewsForm offerId={id} /> : <div />}
    </section>
  );
}
