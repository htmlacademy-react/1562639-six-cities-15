import { NavLink } from 'react-router-dom';
import { CITIES } from '../../constants/const';
import classNames from 'classnames';


function LocationList(): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {CITIES.map(({name, slug}) => (
        <li className="locations__item" key={slug}>
          <NavLink className={({ isActive }) => classNames('locations__item-link tabs__item', {'tabs__item--active': isActive})} to={`/${slug}`}>
            <span>{name}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default LocationList;
