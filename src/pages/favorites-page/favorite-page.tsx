import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import PlaceCard from '../../components/place-card/place-card';
import { PlaceCardProps } from '../../mock/cards-mock';
import { AuthorizationStatus, ComponentEnvironment } from '../../constants/const';
import { Helmet } from 'react-helmet-async';

type FavoritesPageProps = {
  offersArray: PlaceCardProps[];
  authorizationStatus: AuthorizationStatus;
}

function FavoritesPage({offersArray, authorizationStatus} : FavoritesPageProps) : JSX.Element {
  return (
    <div className="page">
      <Helmet>
        <title>Избранное</title>
      </Helmet>
      <Header authorizationStatus={authorizationStatus}/>
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
                  <PlaceCard environment={ComponentEnvironment.Favorites} {...offersArray[1]}/>
                  <PlaceCard environment={ComponentEnvironment.Favorites} {...offersArray[3]}/>
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
                  <PlaceCard environment={ComponentEnvironment.Favorites} {...offersArray[1]}/>
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
