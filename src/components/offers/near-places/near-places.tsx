import OfferCard from '../../offer-card/offer-card';
import {
  ComponentEnvironment,
  NEAR_PLACES_LIMIT,
} from '../../../constants/const';
import { Offer } from '../../../types/offer';

type NearPlacesProps = {
  offers: Offer[];
};

function NearPlaces({ offers }: NearPlacesProps): JSX.Element {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {offers.slice(0, NEAR_PLACES_LIMIT).map((offer) => (
          <OfferCard
            environment={ComponentEnvironment.Cities}
            key={`${offer.id}`}
            {...offer}
          />
        ))}
      </div>
    </section>
  );
}

export default NearPlaces;
