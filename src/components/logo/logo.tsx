import {Link, useLocation} from 'react-router-dom';
import { AppRoute, CITIES } from '../../constants/const';
import classNames from 'classnames';

type LogoProps = {
  environment: string;
}

const cityLinks = CITIES.map((city) => `/${city.slug}`);

function Logo({environment}: LogoProps): JSX.Element {
  const logoSize = {
    width: environment === 'header' ? 81 : 64,
    height: environment === 'header' ? 41 : 33,
  };

  const location = useLocation();

  return (
    <Link className={classNames('header__logo-link', {
      'header__logo-link--active' : cityLinks.includes(location.pathname),
    })} to={AppRoute.Root}
    >
      <img
        className="header__logo"
        src="img/logo.svg"
        alt="6 cities logo"
        width={logoSize.width}
        height={logoSize.height}
      />
    </Link>
  );
}

export default Logo;
