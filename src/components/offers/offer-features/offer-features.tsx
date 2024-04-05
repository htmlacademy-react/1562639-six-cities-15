import { memo } from 'react';
import { FullOffer } from '../../../types/offer';
import { upFirstLetter } from '../../../utils/function';

type OfferFeaturesProps = Pick<FullOffer, 'bedrooms' | 'type' | 'maxAdults'>;

function OfferFeatures_({bedrooms, type, maxAdults}: OfferFeaturesProps) {
  return (
    <ul className="offer__features">
      <li className="offer__feature offer__feature--entire">{upFirstLetter(type)}</li>
      <li className="offer__feature offer__feature--bedrooms">
        {bedrooms > 1 ? `${bedrooms} Bedrooms` : `${bedrooms} Bedroom`}
      </li>
      <li className="offer__feature offer__feature--adults">
        Max {maxAdults > 1 ? `${maxAdults} adults` : `${maxAdults} adult`}
      </li>
    </ul>
  );
}

export const OfferFeatures = memo(OfferFeatures_);
