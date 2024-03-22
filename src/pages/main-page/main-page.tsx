import Header from '../../components/header/header';
import LocationList from '../../components/location-list/location-list';
import Map from '../../components/map/map';
import { AuthorizationStatus, CityName, ComponentEnvironment } from '../../constants/const';
import { Helmet } from 'react-helmet-async';
import { Offer } from '../../types/offer';
import PlaceCard from '../../components/place-card/place-card';
import { useState } from 'react';

type MainPageProps = {
  offers: Offer[];
  authorizationStatus: AuthorizationStatus;
  city: CityName;
};

function MainPage({
  offers,
  authorizationStatus,
  city
}: MainPageProps): JSX.Element {
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);

  const currentOffers = offers.filter((offer) => offer.city.name === city);

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 Cities</title>
      </Helmet>
      <Header authorizationStatus={authorizationStatus} />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationList />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {currentOffers.length} places to stay in {city}
              </b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width={7} height={4}>
                    <use xlinkHref="#icon-arrow-select" />
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li
                    className="places__option places__option--active"
                    tabIndex={0}
                  >
                    Popular
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Price: low to high
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Price: high to low
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Top rated first
                  </li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                {currentOffers.map((offer) => (
                  <PlaceCard
                    environment={ComponentEnvironment.Cities}
                    key={`${offer.id}`}
                    {...offer}
                    onMouseEnter={() => setActiveOfferId(offer.id)}
                    onMouseLeave={() => setActiveOfferId(null)}
                  />
                ))}
              </div>
            </section>
            <div className="cities__right-section">
              <Map
                environment={ComponentEnvironment.Cities}
                city={city}
                offers={currentOffers}
                activeOfferId={activeOfferId}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
