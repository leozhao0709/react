import * as React from 'react';
import { StatelessComponent } from 'react';
import * as styles from './DrawerToggle.css';

interface DrawerToggleProps {
  drawerToggleClicked: () => void;
}

const DrawerToggle: StatelessComponent<DrawerToggleProps> = (props: DrawerToggleProps) => {
  return (
    <div className={styles.drawerToggle} onClick={props.drawerToggleClicked} >
      <div />
      <div />
      <div />
    </div>
  );
};

DrawerToggle.defaultProps = {
};

export default DrawerToggle;
