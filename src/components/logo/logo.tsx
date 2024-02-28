import { Link, useLocation } from 'react-router-dom';
import { AppRoute, CITIES } from '../../constants/const';

type LogoProps = {
  // environment: string;
  width: number;
  height: number;
}

const cityLinks = CITIES.map((city) => `/${city.slug}`);


function Logo({ width, height }: LogoProps): JSX.Element {
  const logoImage = <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={width} height={height} />;

  const location = useLocation();

  if(cityLinks.includes(location.pathname)) {
    return (
      <Link className='header__logo-link' to={AppRoute.Root}>
        {logoImage}
      </Link>
    );
  } else {
    return (
      <a className='header__logo-link header__logo-link--active'>{logoImage}</a>
    );
  }
}

export default Logo;
