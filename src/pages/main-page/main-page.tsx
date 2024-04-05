import Header from '../../components/header/header';
import LocationList from '../../components/location-list/location-list';
import {
  CityName,
  RequestStatus,
} from '../../constants/const';
import { Helmet } from 'react-helmet-async';
import classNames from 'classnames';
import MainEmptyPage from '../../components/main-empty-page/main-empty-page';
import { Loader } from '../../components/loader/loader';
import { useFetchCityOffers } from './hook';
import { OfferList } from '../../components/offer-list/offer-list';
import { useAppSelector } from '../../hooks/store';
import { offersSelectors } from '../../store/slices/offers';
import ErrorPage from '../error-page/error-page';

type MainPageProps = {
  city: CityName;
};

function MainPage({ city }: MainPageProps): JSX.Element {

  const {offers, status} = useFetchCityOffers(city);

  const isEmpty = offers.length === 0;

  const hasError = useAppSelector(offersSelectors.getErrorStatus);

  if (hasError) {
    return (
      <ErrorPage />);
  }

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
              <OfferList city={city} />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
