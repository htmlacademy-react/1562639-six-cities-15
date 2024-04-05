import { memo, useState } from 'react';
import { useActionCreators } from '../../hooks/store';
import { offersActions } from '../../store/slices/offers';
import { MouseEvent } from 'react';
import Sort from '../sort/sort';
import OfferCard from '../offer-card/offer-card';
import { SortOption } from '../sort/const';
import { ComponentEnvironment } from '../../constants/const';
import { FullOffer } from '../../types/offer';

type SortingOffersProps = {
  offers: FullOffer[];
}

function SortingOffers_({offers}: SortingOffersProps): JSX.Element {
  const [activeSort, setActiveSort] = useState(SortOption.Popular);
  const { setActiveId } = useActionCreators(offersActions);

  const handleMouseEnter = (evt: MouseEvent<HTMLElement>) => {
    const target = evt.currentTarget as HTMLElement;
    const id = target.dataset.id;
    setActiveId(id);
  };

  const handleMouseLeave = () => {
    setActiveId(undefined);
  };

  let sortedOffers = offers;

  if (activeSort === SortOption.PriceLowToHigh) {
    sortedOffers = offers.toSorted((a, b) => a.price - b.price);
  }

  if (activeSort === SortOption.PriceHighToLow) {
    sortedOffers = offers.toSorted((a, b) => b.price - a.price);
  }

  if (activeSort === SortOption.TopRatedFirst) {
    sortedOffers = offers.toSorted((a, b) => b.rating - a.rating);
  }
  return (
    <>
      <Sort current={activeSort} setter={setActiveSort} />
      <div className="cities__places-list places__list tabs__content">
        {sortedOffers.map((offer) => (
          <OfferCard
            environment={ComponentEnvironment.Cities}
            key={`${offer.id}`}
            {...offer}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </div>
    </>
  );
}

export const SortingOffers = memo(SortingOffers_);
