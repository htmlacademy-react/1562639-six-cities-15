import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { AuthorizationStatus } from '../../constants/const';
import { Helmet } from 'react-helmet-async';
import { useAppSelector } from '../../hooks/store';
import { offersSelectors } from '../../store/slices/offers';
import classNames from 'classnames';
import FavoritesEmptyPage from '../../components/favorites-empty-page/favorites-empty-page';
import FavoritesList from './favorites-list';

type FavoritesPageProps = {
  authorizationStatus: AuthorizationStatus;
};

function FavoritesPage({
  authorizationStatus,
}: FavoritesPageProps): JSX.Element {
  const offers = useAppSelector(offersSelectors.offers);
  const favoritesOffers = offers.filter((offer) => offer.isFavorite);

  const isEmpty = favoritesOffers.length === 0;

  return (
    <div className={classNames('page', { 'page--favorites-empty': isEmpty })}>
      <Helmet>
        <title>6 Cities - favorites</title>
      </Helmet>
      <Header authorizationStatus={authorizationStatus} />
      <main
        className={classNames('page__main', 'page__main--favorites', {
          'page__main--favorites-empty': isEmpty,
        })}
      >
        <div className="page__favorites-container container">
          <section className={classNames('favorites', {
            'favorites--empty' : isEmpty
          })}
          >
            <h1 className={classNames('favorites__title', {'visually-hidden' : isEmpty})}>{isEmpty ? 'Favorites (empty)' : 'Saved listing'}</h1>
            {isEmpty ? (
              <FavoritesEmptyPage />
            ) : (
              <FavoritesList offers={favoritesOffers} />
            )}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FavoritesPage;
