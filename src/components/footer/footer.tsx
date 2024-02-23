import Logo from '../logo/logo';
import { ComponentEnvironment } from '../../constants/const';

function Footer(): JSX.Element {
  return (
    <footer className="footer container">
      <Logo environment={ComponentEnvironment.Footer} />
    </footer>
  );
}

export default Footer;
