import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { Helmet } from 'react-helmet-async';
import { useAppSelector } from '../../hooks/store';
import classNames from 'classnames';
import FavoritesEmptyPage from '../../components/favorites-empty-page/favorites-empty-page';
import FavoritesList from './favorites-list';
import { favoritesSelectors } from '../../store/slices/favorites';


function FavoritesPage(): JSX.Element {
  const offers = useAppSelector(favoritesSelectors.favorites);
  const hasFavorites = offers.length > 0;

  return (
    <div className={classNames('page', { 'page--favorites-empty': hasFavorites })}>
      <Helmet>
        <title>6 Cities - favorites</title>
      </Helmet>
      <Header />
      <main
        className={classNames('page__main', 'page__main--favorites', {
          'page__main--favorites-empty': hasFavorites,
        })}
      >
        <div className="page__favorites-container container">
          <section className={classNames('favorites', {
            'favorites--empty' : hasFavorites
          })}
          >
            <h1 className={classNames('favorites__title', {'visually-hidden' : !hasFavorites})}>{hasFavorites ? 'Saved listing' : 'Favorites (empty)'}</h1>
            {hasFavorites ? (
              <FavoritesList offers={offers} />
            ) : (
              <FavoritesEmptyPage />
            )}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FavoritesPage;
