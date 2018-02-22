import * as React from 'react';
import { StatelessComponent, ReactNode } from 'react';
import * as styles from './NavigationItem.css';
import { NavLink } from 'react-router-dom';

interface NavigationItemProps {
  children: ReactNode;
  link: string;
  active?: boolean;
}

const NavigationItem: StatelessComponent<NavigationItemProps> = (props: NavigationItemProps) => {
  return (
    <li className={styles.navigationItem} >
      <NavLink
        to={props.link}
        exact
        activeClassName={styles.active}
      >
        {props.children}
      </NavLink>
    </li>
  );
};

NavigationItem.defaultProps = {
  active: false
};

export default NavigationItem;
