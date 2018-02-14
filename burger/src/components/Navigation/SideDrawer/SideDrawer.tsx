import * as React from 'react';
import { StatelessComponent } from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import * as styles from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';

interface SideDrawerProps {
  show?: boolean;
  closed: () => void;
}

const SideDrawer: StatelessComponent<SideDrawerProps> = (props: SideDrawerProps) => {

  let assignedClasses = [styles.sideDrawer, styles.close].join(' ');
  if (props.show) {
    assignedClasses = [styles.sideDrawer, styles.open].join(' ');
  }

  return (
    <>
      <Backdrop
        show={props.show}
        clicked={props.closed}
      />
      <div className={assignedClasses} >
        <div className={styles.logo} >
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </>
  );
};

SideDrawer.defaultProps = {
  show: false,
};

export default SideDrawer;
