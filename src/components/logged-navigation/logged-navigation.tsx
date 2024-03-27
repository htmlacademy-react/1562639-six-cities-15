import { Link } from 'react-router-dom';
import { AppRoute } from '../../constants/const';
import { useAppSelector } from '../../hooks/store';
import { offersSelectors } from '../../store/slices/offers';

function LoggedNavigation() {

  const offers = useAppSelector(offersSelectors.offers);
  const favoritesOffers = offers.filter((offer) => offer.isFavorite);
  return (
    <ul className="header__nav-list">
      <li className="header__nav-item user">
        <Link
          className="header__nav-link header__nav-link--profile"
          to={AppRoute.Favorites}
        >
          <div className="header__avatar-wrapper user__avatar-wrapper"></div>
          <span className="header__user-name user__name">
            Oliver.conner@gmail.com
          </span>
          <span className="header__favorite-count">{favoritesOffers.length}</span>
        </Link>
      </li>
      <li className="header__nav-item">
        <Link className="header__nav-link" to={AppRoute.Root}>
          <span className="header__signout">Sign out</span>
        </Link>
      </li>
    </ul>
  );
}

export default LoggedNavigation;
