import Header from '../../components/header/header';
import LocationList from '../../components/location-list/location-list';
import Map from '../../components/map/map';
import {
  CityName,
  ComponentEnvironment,
  RequestStatus,
} from '../../constants/const';
import { Helmet } from 'react-helmet-async';
import classNames from 'classnames';
import MainEmptyPage from '../../components/main-empty-page/main-empty-page';
import { Loader } from '../../components/loader/loader';
import { useFetchCityOffers } from './hook';
import { SortingOffers } from '../../components/sorting-offers/sorting-offers';

type MainPageProps = {
  city: CityName;
};

function MainPage({ city }: MainPageProps): JSX.Element {

  const {offers, status} = useFetchCityOffers(city);

  const isEmpty = offers.length === 0;

  if (status === RequestStatus.Loading) {
    return (
      <Loader />
    );
  }

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 Cities</title>
      </Helmet>
      <Header />
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
                    {offers.length} place
                    {offers.length > 1 && 's'} to stay in {city}
                  </b>
                  <SortingOffers offers={offers} />
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
