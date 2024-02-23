import {Link} from 'react-router-dom';

type LogoProps = {
  environment: string;
}

function Logo({environment}: LogoProps): JSX.Element {
  const logoSize = {
    width: environment === 'header' ? 81 : 64,
    height: environment === 'header' ? 41 : 33,
  };

  return (
    <Link className="header__logo-link header__logo-link--active" to="/">
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
