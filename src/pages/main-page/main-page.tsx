import Header from '../../components/header/header';
import LocationList from '../../components/location-list/location-list';
import PlaceCard from '../../components/place-card/place-card';
import Map from '../../components/map/map';
import { CARDS_MOCK } from '../../constants/cards-mock';
import { ComponentEnvironment } from '../../constants/const';
import { Helmet } from 'react-helmet-async';

type MainPageProps = {
  resultCount: number;
}

function MainPage({resultCount} : MainPageProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>Все предложения</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationList />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{resultCount} places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width={7} height={4}>
                    <use xlinkHref="#icon-arrow-select" />
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li
                    className="places__option places__option--active"
                    tabIndex={0}
                  >
                    Popular
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Price: low to high
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Price: high to low
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Top rated first
                  </li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                {CARDS_MOCK.map((offer) =>
                  (<PlaceCard environment={ComponentEnvironment.Cities} key={`${offer.id}`} {...offer} />))}
                {/* Равносильно записи:
                (<PlaceCard environment='cities' key={`${item.id}`} name={`${item.name}`} type={`${item.type}`} link={`${item.link}`} image={`${item.image}`} price={item.price} rating={`${item.rating}`} isFavorite={item.isFavorite} isPremium={item.isPremium} />))}
                */}
              </div>
            </section>
            <div className="cities__right-section">
              <Map environment={ComponentEnvironment.Cities} />
            </div>
          </div>
        </div>
      </main>
    </div>

  );
}

export default MainPage;
