import Header from '../../components/header/header';
import LocationList from '../../components/location-list/location-list';
import Map from '../../components/map/map';
import {
  AuthorizationStatus,
  CityName,
  ComponentEnvironment,
} from '../../constants/const';
import { Helmet } from 'react-helmet-async';
import PlaceCard from '../../components/place-card/place-card';
import { useActionCreators, useAppSelector } from '../../hooks/store';
import { offersActions, offersSelectors } from '../../store/slices/offers';
import classNames from 'classnames';
import { MouseEvent } from 'react';

type MainPageProps = {
  city: CityName;
  authorizationStatus: AuthorizationStatus;
};

function MainPage({ city, authorizationStatus }: MainPageProps): JSX.Element {
  const {setActiveId} = useActionCreators(offersActions);

  const handleMouseEnter = (evt: MouseEvent<HTMLElement>) => {
    const target = evt.currentTarget as HTMLElement;
    const id = target.dataset.id;
    setActiveId(id);
  };

  const handleMouseLeave = () => {
    setActiveId(undefined);
  };

  const offers = useAppSelector(offersSelectors.offers);

  const offersByCity = Object.groupBy(offers, (offer) => offer.city.name);

  const currentOffers = offersByCity[city] ?? [];

  const isEmpty = currentOffers.length === 0;

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 Cities</title>
      </Helmet>
      <Header authorizationStatus={authorizationStatus} />
      <main className={classNames('page__main', 'page__main--index', {'page__main--index-empty' : isEmpty})}>
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
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  />
                ))}
              </div>
            </section>
            <div className="cities__right-section">
              <Map
                environment={ComponentEnvironment.Cities}
                offers={offers}
                city={city}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
