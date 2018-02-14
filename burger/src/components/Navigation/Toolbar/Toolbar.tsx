import * as React from 'react';
import { StatelessComponent } from 'react';
import * as styles from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

interface ToolbarProps {
}

const Toolbar: StatelessComponent<ToolbarProps> = (props: ToolbarProps) => {
  return (
    <header className={styles.toolbar} >
      <div>MEANU</div>
      <Logo />
      <NavigationItems />
    </header>
  );
};

Toolbar.defaultProps = {
};

export default Toolbar;
