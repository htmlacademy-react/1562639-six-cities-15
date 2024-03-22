import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import PlaceCard from '../../components/place-card/place-card';
import {
  AuthorizationStatus,
  ComponentEnvironment,
} from '../../constants/const';
import { Helmet } from 'react-helmet-async';
import { useAppSelector } from '../../hooks/store';

type FavoritesPageProps = {
  authorizationStatus: AuthorizationStatus;
};

function FavoritesPage({authorizationStatus}: FavoritesPageProps): JSX.Element {
  const offers = useAppSelector((state) => state.offers);

  return (
    <div className="page">
      <Helmet>
        <title>6 Cities - favorites</title>
      </Helmet>
      <Header authorizationStatus={authorizationStatus} />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  <PlaceCard
                    environment={ComponentEnvironment.Favorites}
                    {...offers[1]}
                  />
                  <PlaceCard
                    environment={ComponentEnvironment.Favorites}
                    {...offers[3]}
                  />
                </div>
              </li>
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Cologne</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  <PlaceCard
                    environment={ComponentEnvironment.Favorites}
                    {...offers[1]}
                  />
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FavoritesPage;
