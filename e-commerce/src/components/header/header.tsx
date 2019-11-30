import * as React from 'react';
import styles from './header.module.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  return (
    <nav className={styles.header}>
      <Link className={styles.logo} to="/">
        <Logo />
      </Link>
      <div className={styles.navItems}>
        <Link className={styles.navItem} to="/shop">
          SHOP
        </Link>
        <Link className={styles.navItem} to="/shop">
          CONTACT
        </Link>
      </div>
    </nav>
  );
};

Header.defaultProps = {};

export default Header;
