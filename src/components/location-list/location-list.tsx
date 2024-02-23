const LocationItem = ({city}:{city:string}) => (
  <li className="locations__item">
    <a className="locations__item-link tabs__item}" href="#">
      <span>{city}</span>
    </a>
  </li>
);

const cities: string[] = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];


function LocationList(): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (<LocationItem city={city} key={city}/>))}
    </ul>
  );
}

export default LocationList;
