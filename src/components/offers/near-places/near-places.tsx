import PlaceCard from '../../place-card/place-card';
import { PlaceCardProps } from '../../../mock/cards-mock';
import { ComponentEnvironment } from '../../../constants/const';

type NearPlacesProps = {
  offers: PlaceCardProps[];
}

function NearPlaces({offers} : NearPlacesProps): JSX.Element {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">
        Other places in the neighbourhood
      </h2>
      <div className="near-places__list places__list">
        {offers.slice(0,3).map((offer) =>
          (<PlaceCard environment={ComponentEnvironment.Cities} key={`${offer.id}`} {...offer} />))}
      </div>
    </section>
  );
}

export default NearPlaces;
