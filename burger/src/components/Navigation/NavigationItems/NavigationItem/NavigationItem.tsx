import * as React from 'react';
import { StatelessComponent, ReactNode } from 'react';
import * as styles from './NavigationItem.css';

interface NavigationItemProps {
  children: ReactNode;
  link: string;
  active?: boolean;
}

const NavigationItem: StatelessComponent<NavigationItemProps> = (props: NavigationItemProps) => {
  return (
    <li className={styles.navigationItem} >
      <a
        href={props.link}
        className={props.active ? styles.active : ''}
      >
        {props.children}
      </a>
    </li>
  );
};

NavigationItem.defaultProps = {
  active: false
};

export default NavigationItem;
