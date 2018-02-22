import * as React from 'react';
import { StatelessComponent } from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import * as styles from './NavigationItems.css';

interface NavigationItemsProps {
}

const NavigationItems: StatelessComponent<NavigationItemsProps> = (props: NavigationItemsProps) => {
  return (
    <ul className={styles.navigationItems}>
      <NavigationItem link="/" active >Burger Builder</NavigationItem>
      <NavigationItem link="/orders" >Orders</NavigationItem>
    </ul>
  );
};

NavigationItems.defaultProps = {
};

export default NavigationItems;
