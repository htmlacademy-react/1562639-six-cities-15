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
      {cities.map((item) => (<LocationItem city={item} key={item}/>))}
    </ul>
  );
}

export default LocationList;
