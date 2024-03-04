import { Link } from 'react-router-dom';
import Logo from '../logo/logo';
import LoggedNavigation from '../logged-navigation/logged-navigation';
import { AppRoute, AuthorizationStatus } from '../../constants/const';

type HeaderProps = {
  authorizationStatus: AuthorizationStatus;
}

function Header({ authorizationStatus }: HeaderProps): JSX.Element {
  const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo width={81} height={41} />
          </div>
          <nav className="header__nav">
            {isAuthorized ? (
              <LoggedNavigation />
            ) : (
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link
                    className="header__nav-link header__nav-link--profile"
                    to={AppRoute.Login}
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__login">Sign in</span>
                  </Link>
                </li>
              </ul>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
