import { memo } from 'react';
import Logo from '../logo/logo';

function Footer_(): JSX.Element {
  return (
    <footer className="footer container">
      <Logo width={64} height={33} />
    </footer>
  );
}

const Footer = memo(Footer_);

export default Footer;
