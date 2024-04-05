import { memo } from 'react';
import { FullOffer } from '../../../types/offer';

const OfferItem = ({ offer }: { offer: string }) => (
  <li className="offer__inside-item">{offer}</li>
);

type OfferInsideProps = Pick<FullOffer, 'goods'>

function OfferInside_({goods}:OfferInsideProps): JSX.Element {
  return (
    <div className="offer__inside">
      <h2 className="offer__inside-title">What`s inside</h2>
      <ul className="offer__inside-list">
        {goods.map((offer) => <OfferItem offer={offer} key={offer} />)}
      </ul>
    </div>
  );
}

const OfferInside = memo(OfferInside_);

export default OfferInside;
