import { Offers } from '../../types/offer';
import { formatRating } from '../../utils/function';

type RatingProps = Pick<Offers, 'rating'> & ClassNameProps;
type ClassNameProps = {
  classStart: string;
};

export function Rating({ rating, classStart }: RatingProps) {
  const isOffer = classStart === 'offer';
  return (
    <div className={`${classStart}__rating rating`}>
      <div className={`${classStart}__stars rating__stars`}>
        <span style={{ width: formatRating(rating) }} />
        <span className="visually-hidden">Rating</span>
      </div>
      {isOffer && <span className={`${classStart}__rating-value rating__value`}>{rating}</span>}
    </div>
  );
}
