import OfferGallery from '../../components/offers/offer-gallery/offer-gallery';
import OfferInside from '../../components/offers/offer-inside/offer-inside';
import NearPlaces from '../../components/offers/near-places/near-places';
import Map from '../../components/map/map';
import {
  AppRoute,
  ComponentEnvironment,
} from '../../constants/const';
import { Helmet } from 'react-helmet-async';
import ReviewsList from '../../components/reviews/reviews-list/reviews-list';
import { Link, useParams } from 'react-router-dom';
import { REVIEWS } from '../../mock/reviews';
import { PremiumMark } from '../../components/premium-mark/premium-mark';
import classNames from 'classnames';
import { OfferHost } from '../../components/offers/offer-host/offer-host';
import { OfferFeatures } from '../../components/offers/offer-features/offer-features';
import { Rating } from '../../components/rating/rating';
import { Price } from '../../components/price/price';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import { getNearOffers } from '../../pages/offer-page/utils';
import { useAppSelector } from '../../hooks/store';

function OfferPage(): JSX.Element {
  const { id } = useParams();
  const offers = useAppSelector((state) => state.offers);
  const foundOffer = offers.find((item): boolean => item.id === id);

  if (!foundOffer) {
    return <NotFoundPage />;
  }

  const offerPage = { ...offers, ...foundOffer };
  const nearOffers = getNearOffers(offerPage);
  const nearOffersPlusCurrent = [offerPage, ...nearOffers];
  const {
    images,
    isPremium,
    title,
    isFavorite,
    rating,
    type,
    bedrooms,
    price,
    goods,
    host,
    maxAdults,
    description,
  } = offerPage;

  return (
    <div className="page">
      <Helmet>
        <title>6 Cities - offer</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width={81}
                  height={41}
                />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link
                    className="header__nav-link header__nav-link--profile"
                    to={AppRoute.Login}
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__login">Sign in</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferGallery images={images} />
          <div className="offer__container container">
            <div className="offer__wrapper">
              {isPremium && <PremiumMark className={'offer__mark'} />}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">{title}</h1>
                <button
                  className={classNames('offer__bookmark-button button', {
                    'offer__bookmark-button--active': isFavorite,
                  })}
                  type="button"
                >
                  <svg className="offer__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <Rating rating={rating} classStart={'offer'} />
              <OfferFeatures
                type={type}
                bedrooms={bedrooms}
                maxAdults={maxAdults}
              />
              <Price price={price} classStart={'offer'} />
              <OfferInside goods={goods} />
              <OfferHost host={host} description={description} />
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">
                  Reviews ·{' '}
                  <span className="reviews__amount">{REVIEWS.length}</span>
                </h2>
                <ReviewsList reviews={REVIEWS} />
              </section>
            </div>
          </div>
          <Map
            environment={ComponentEnvironment.Offer}
            offers={nearOffersPlusCurrent}
            activeOfferId={foundOffer.id}
          />
        </section>
        <div className="container">
          <NearPlaces offers={nearOffers} />
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
