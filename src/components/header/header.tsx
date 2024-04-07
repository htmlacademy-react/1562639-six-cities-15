import { useLocation } from 'react-router-dom';
import Logo from '../logo/logo';
import { AppRoute } from '../../constants/const';
import Navigation from '../navigation/navigation';
import { memo } from 'react';

function Header_(): JSX.Element {
  const { pathname } = useLocation() as { pathname: AppRoute };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo width={81} height={41} />
          </div>
          <Navigation pathname={pathname} />
        </div>
      </div>
    </header>
  );
}

const Header = memo(Header_);

export default Header;
