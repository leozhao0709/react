import * as React from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { auth } from '../../utils/firebase.util';
import { useSelector } from 'react-redux';
import { StoreState } from '../../redux/store';
import { CrownIcon as Logo } from '@leozhao0709/react-millhouse';
import Cart from './Cart';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const currentUser = useSelector((state: StoreState) => state.userState.currentUser);

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
        {currentUser ? (
          <React.Fragment>
            <div className={styles.navItem} onClick={() => auth.signOut()}>
              SIGN OUT
            </div>
            <Cart />
          </React.Fragment>
        ) : (
          <Link className={styles.navItem} to="/signin">
            SIGN IN
          </Link>
        )}
      </div>
    </nav>
  );
};

Header.defaultProps = {};

export default Header;
