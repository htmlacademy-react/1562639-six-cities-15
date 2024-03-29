import Header from '../../components/header/header';
import LocationList from '../../components/location-list/location-list';
import Map from '../../components/map/map';
import {
  AuthorizationStatus,
  CityName,
  ComponentEnvironment,
  RequestStatus,
} from '../../constants/const';
import { Helmet } from 'react-helmet-async';
import PlaceCard from '../../components/place-card/place-card';
import { useActionCreators, useAppSelector } from '../../hooks/store';
import { offersActions, offersSelectors } from '../../store/slices/offers';
import classNames from 'classnames';
import { MouseEvent, useState } from 'react';
import MainEmptyPage from '../../components/main-empty-page/main-empty-page';
import Sort from '../../components/sort/sort';
import { SortOption } from '../../components/sort/const';
import { Loader } from '../../components/loader/loader';

type MainPageProps = {
  city: CityName;
  authorizationStatus: AuthorizationStatus;
};

function MainPage({ city, authorizationStatus }: MainPageProps): JSX.Element {
  const { setActiveId } = useActionCreators(offersActions);
  const [activeSort, setActiveSort] = useState(SortOption.Popular);

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

  let sortedOffers = currentOffers;

  const status = useAppSelector(offersSelectors.offersStatus);
  if (status === RequestStatus.Loading) {
    return (
      <Loader />
    );
  }

  if (activeSort === SortOption.PriceLowToHigh) {
    sortedOffers = currentOffers.toSorted((a, b) => a.price - b.price);
  }

  if (activeSort === SortOption.PriceHighToLow) {
    sortedOffers = currentOffers.toSorted((a, b) => b.price - a.price);
  }

  if (activeSort === SortOption.TopRatedFirst) {
    sortedOffers = currentOffers.toSorted((a, b) => b.rating - a.rating);
  }

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 Cities</title>
      </Helmet>
      <Header authorizationStatus={authorizationStatus} />
      <main
        className={classNames('page__main', 'page__main--index', {
          'page__main--index-empty': isEmpty,
        })}
      >
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationList />
          </section>
        </div>
        <div className="cities">
          <div
            className={classNames('container', 'cities__places-container', {
              'cities__places-container--empty': isEmpty,
            })}
          >
            {isEmpty ? (
              <MainEmptyPage city={city} />
            ) : (
              <>
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">
                    {currentOffers.length} place
                    {currentOffers.length > 1 && 's'} to stay in {city}
                  </b>
                  <Sort current={activeSort} setter={setActiveSort} />
                  <div className="cities__places-list places__list tabs__content">
                    {sortedOffers.map((offer) => (
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
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
