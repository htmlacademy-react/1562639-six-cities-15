import { Link } from 'react-router-dom';
import { HTMLAttributes, memo } from 'react';
import { Offer } from '../../types/offer';
import { PremiumMark } from '../premium-mark/premium-mark';
import { Rating } from '../rating/rating';
import { Price } from '../price/price';
import { BookmarkButton } from '../bookmark-button/bookmark-button';
import { CardImageSize } from '../../constants/const';

type HTMLProps = Pick<HTMLAttributes<HTMLElement>, 'onMouseEnter' | 'onMouseLeave'>;
type OfferProps = Offer & HTMLProps;

function OfferCard_({
  environment,
  isPremium,
  previewImage,
  title,
  price,
  isFavorite,
  rating,
  type,
  id,
  onMouseEnter,
  onMouseLeave,
}: OfferProps): JSX.Element {
  const imageSize = {
    width:
      environment === 'cities' || environment === 'near-places' ? CardImageSize.WidthBig : CardImageSize.WidthSmall,
    height:
      environment === 'cities' || environment === 'near-places' ? CardImageSize.HeightBig : CardImageSize.HeightSmall,
  };

  return (
    <article
      className={`${environment}__card place-card`}
      data-id={id}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {isPremium && <PremiumMark className={'place-card__mark'} />}
      <div
        className={`${environment}__image-wrapper place-card__image-wrapper`}
      >
        <Link to={`/offer/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width={imageSize.width}
            height={imageSize.height}
            alt={title}
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <Price price={price} classStart={'place-card'} />
          <BookmarkButton offerId={id} isFavorite={isFavorite} />
        </div>
        <Rating rating={rating} classStart={'place-card'} />
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

const OfferCard = memo(OfferCard_);

export default OfferCard;
