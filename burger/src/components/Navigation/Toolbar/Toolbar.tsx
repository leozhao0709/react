import * as React from 'react';
import { StatelessComponent } from 'react';
import * as styles from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

interface ToolbarProps {
  drawerToggle: () => void;
}

const Toolbar: StatelessComponent<ToolbarProps> = (props: ToolbarProps) => {
  return (
    <header className={styles.toolbar} >
      <DrawerToggle drawerToggleClicked={props.drawerToggle} />
      <div className={styles.logo} >
        <Logo />
      </div>
      <nav className={styles.desktopOnly} >
        <NavigationItems />
      </nav>
    </header>
  );
};

Toolbar.defaultProps = {
};

export default Toolbar;
