
import { Link } from 'react-router-dom';
import { getRandomArrayElement } from '../../utils/function';
import { CITIES } from '../../constants/const';

export function RandomCity(): JSX.Element {
  const {slug, name} = getRandomArrayElement(CITIES);
  return (
    <section className="locations locations--login locations--current">
      <div className="locations__item">
        <Link className="locations__item-link" to={`/${slug}`}>
          <span>{name}</span>
        </Link>
      </div>
    </section>
  );
}
