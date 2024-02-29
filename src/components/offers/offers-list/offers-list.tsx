import PlaceCard from '../../place-card/place-card';
import { PlaceCardProps } from '../../../mock/cards-mock';
import { ComponentEnvironment } from '../../../constants/const';

type OffersListProps = {
  offersArray: PlaceCardProps[];
}

function OffersList({offersArray} : OffersListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offersArray.map((offer) =>
        (<PlaceCard environment={ComponentEnvironment.Cities} key={`${offer.id}`} {...offer} />))}
      {/* Равносильно записи:
      (<PlaceCard environment='cities' key={`${item.id}`} name={`${item.name}`} type={`${item.type}`} link={`${item.link}`} image={`${item.image}`} price={item.price} rating={`${item.rating}`} isFavorite={item.isFavorite} isPremium={item.isPremium} />))}
      */}
    </div>
  );
}

export default OffersList;
