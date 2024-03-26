import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { HTMLAttributes } from 'react';
import { Offer } from '../../types/offer';
import { PremiumMark } from '../premium-mark/premium-mark';
import { Rating } from '../rating/rating';
import { Price } from '../price/price';

type HTMLProps = Pick<HTMLAttributes<HTMLElement>, 'onMouseEnter' | 'onMouseLeave'>;
type OfferProps = Offer & HTMLProps;

function PlaceCard({
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
      environment === 'cities' || environment === 'near-places' ? 260 : 150,
    height:
      environment === 'cities' || environment === 'near-places' ? 200 : 110,
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
          <button
            className={classNames('place-card__bookmark-button button', {
              'place-card__bookmark-button--active': isFavorite,
            })}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
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

export default PlaceCard;
