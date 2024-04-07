import { CityName, ComponentEnvironment } from '../../constants/const';
import { useFetchCityOffers } from '../../pages/main-page/hook';
import Map from '../map/map';
import { SortingOffers } from '../sorting-offers/sorting-offers';

type OfferListProps = {
  city: CityName;
};

export function OfferList({city}: OfferListProps): JSX.Element {
  const {offers} = useFetchCityOffers(city);
  return (
    <>
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">
          {offers.length} place
          {offers.length > 1 && 's'} to stay in {city}
        </b>
        <SortingOffers offers={offers} />
      </section>
      <div className="cities__right-section">
        <Map
          environment={ComponentEnvironment.Cities}
          offers={offers}
          city={city}
        />
      </div>
    </>
  );
}
