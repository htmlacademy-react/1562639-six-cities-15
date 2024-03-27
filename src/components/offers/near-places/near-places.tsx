import PlaceCard from '../../place-card/place-card';
import {
  ComponentEnvironment,
  NEAR_PLACES_LIMIT,
} from '../../../constants/const';
import { Offer } from '../../../types/offer';
import { useActionCreators } from '../../../hooks/store';
import { offersActions } from '../../../store/slices/offers';
import { MouseEvent } from 'react';

type NearPlacesProps = {
  offers: Offer[];
};

function NearPlaces({ offers }: NearPlacesProps): JSX.Element {
  const { setActiveId } = useActionCreators(offersActions);

  const handleMouseEnter = (evt: MouseEvent<HTMLElement>) => {
    const target = evt.currentTarget as HTMLElement;
    const id = target.dataset.id;
    setActiveId(id);
  };

  const handleMouseLeave = () => {
    setActiveId(undefined);
  };
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {offers.slice(0, NEAR_PLACES_LIMIT).map((offer) => (
          <PlaceCard
            environment={ComponentEnvironment.Cities}
            key={`${offer.id}`}
            {...offer}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </div>
    </section>
  );
}

export default NearPlaces;
