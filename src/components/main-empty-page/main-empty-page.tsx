import { memo } from 'react';
import { CityName } from '../../constants/const';

type MainEmptyProps = {
  city: CityName;
};

function MainEmptyPage_({ city }: MainEmptyProps): JSX.Element {
  return (
    <>
      <section className="cities__no-places">
        <div className="cities__status-wrapper tabs__content">
          <b className="cities__status">No places to stay available</b>
          <p className="cities__status-description">
            We could not find any property available at the moment in {city}
          </p>
        </div>
      </section>
      <div className="cities__right-section" />
    </>
  );
}

const MainEmptyPage = memo(MainEmptyPage_);

export default MainEmptyPage;
