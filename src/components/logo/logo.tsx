import { Link, useLocation } from 'react-router-dom';
import { AppRoute, CITIES } from '../../constants/const';
import { memo } from 'react';

type LogoProps = {
  width: number;
  height: number;
}

const cityLinks = CITIES.map((city) => `/${city.slug}`);


function Logo_({ width, height }: LogoProps) {
  const logoImage = <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={width} height={height} />;

  const location = useLocation();

  if(!cityLinks.includes(location.pathname)) {
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

const Logo = memo(Logo_);

export default Logo;
