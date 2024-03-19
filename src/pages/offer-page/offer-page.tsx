import Header from '../../components/header/header';
import OfferGallery from '../../components/offers/offer-gallery/offer-gallery';
import OfferInside from '../../components/offers/offer-inside/offer-inside';
import NearPlaces from '../../components/offers/near-places/near-places';
import Map from '../../components/map/map';
import { AuthorizationStatus,
  // CityName,
  ComponentEnvironment
} from '../../constants/const';
import { Helmet } from 'react-helmet-async';
import ReviewsForm from '../../components/reviews/reviews-form/reviews-form';
import { Offers } from '../../types/offer';
import ReviewsList from '../../components/reviews/reviews-list/reviews-list';
import { useParams } from 'react-router-dom';
import NotFoundPage from '../not-found-page/not-found-page';
import { getNearOffers } from './utils';
import { REVIEWS } from '../../mock/reviews';

type OfferPageProps = {
  offers: Offers[];
  authorizationStatus: AuthorizationStatus;
};

function OfferPage({
  offers,
  authorizationStatus,
}: OfferPageProps): JSX.Element {
  const {id} = useParams();
  const foundOffer = offers.find((item) : boolean => item.id === id);

  if (!foundOffer) {
    return <NotFoundPage />;
  }

  const offerPage = {...offers, ...foundOffer};
  const nearOffers = getNearOffers(offerPage);
  const nearOffersPlusCurrent = [offerPage, ...nearOffers];

  return (
    <div className="page">
      <Helmet>
        <title>6 Cities - offer</title>
      </Helmet>
      <Header authorizationStatus={authorizationStatus} />
      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferGallery />
          <div className="offer__container container">
            <div className="offer__wrapper">
              <div className="offer__mark">
                <span>Premium</span>
              </div>
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  Beautiful &amp; luxurious studio at great location
                </h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: '80%' }} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">4.8</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  Apartment
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  3 Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max 4 adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">€120</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <OfferInside />
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="offer__avatar user__avatar"
                      src="img/avatar-angelina.jpg"
                      width={74}
                      height={74}
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">Angelina</span>
                  <span className="offer__user-status">Pro</span>
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    A quiet cozy and picturesque that hides behind a a river by
                    the unique lightness of Amsterdam. The building is green and
                    from 18th century.
                  </p>
                  <p className="offer__text">
                    An independent House, strategically located between Rembrand
                    Square and National Opera, but where the bustle of the city
                    comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">
                  Reviews · <span className="reviews__amount">{REVIEWS.length}</span>
                </h2>
                <ReviewsList reviews={REVIEWS} />
                <ReviewsForm />
              </section>
            </div>
          </div>
          <Map
            environment={ComponentEnvironment.Offer}
            offers={nearOffersPlusCurrent}
            city={foundOffer.city.name}
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
