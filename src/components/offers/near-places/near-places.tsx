import PlaceCard from '../../place-card/place-card';
import { PlaceCardProps } from '../../../mock/cards-mock';
import { ComponentEnvironment } from '../../../constants/const';

type NearPlacesProps = {
  offersArray: PlaceCardProps[];
}

function NearPlaces({offersArray} : NearPlacesProps): JSX.Element {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">
        Other places in the neighbourhood
      </h2>
      <div className="near-places__list places__list">
        {offersArray.map((offer) =>
          (<PlaceCard environment={ComponentEnvironment.Cities} key={`${offer.id}`} {...offer} />)).slice(0,3)}
      </div>
    </section>
  );
}

export default NearPlaces;
