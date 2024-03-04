const OfferItem = ({ offer }: { offer: string }) => (
  <li className="offer__inside-item">{offer}</li>
);

const offers: string[] = ['Wi-Fi', 'Washing machine', 'Towels', 'Heating', 'Coffee machine', 'Baby seat', 'Kitchen', 'Dishwasher', 'Cabel TV', 'Fridge'];

function OfferInside(): JSX.Element {
  return (
    <div className="offer__inside">
      <h2 className="offer__inside-title">What`s inside</h2>
      <ul className="offer__inside-list">
        {offers.map((offer) => <OfferItem offer={offer} key={offer} />)}
      </ul>
    </div>
  );
}

export default OfferInside;
