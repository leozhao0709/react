import * as React from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../utils/firebase.util';
import { useSelector } from 'react-redux';
import { StoreState } from '../../redux/store';

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
          <div className={styles.navItem} onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
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
