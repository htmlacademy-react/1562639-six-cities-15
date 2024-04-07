import { Link } from 'react-router-dom';
import { CITIES, ComponentEnvironment } from '../../constants/const';
import { Offer } from '../../types/offer';
import OfferCard from '../../components/offer-card/offer-card';

type FavoritesListProps = {
  offers: Offer[];
};

function FavoritesList({ offers }: FavoritesListProps): JSX.Element {
  return (
    <ul className="favorites__list">
      {CITIES.map((city) => {
        const offersByCity = offers.filter((offer) => offer.city.name === city.name);
        if (offersByCity.length) {
          return (
            <li className="favorites__locations-items" key={city.slug}>
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <Link className="locations__item-link" to={`/${city.slug}`}>
                    <span>{city.name}</span>
                  </Link>
                </div>
              </div>
              <div className="favorites__places">
                {offersByCity.map((offer) => (
                  <OfferCard environment={ComponentEnvironment.Favorites} {...offer} key={offer.id} />
                ))}
              </div>
            </li>
          );
        }
      })}
    </ul>
  );
}

export default FavoritesList;
