import * as React from 'react';
import { ReactNode, StatelessComponent } from 'react';
import * as styles from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

interface LayoutProps {
  children?: ReactNode;
}

const Layout: StatelessComponent<LayoutProps> = (props: LayoutProps) => {
  return (
    <>
      <Toolbar />
      <main className={styles.content} >
        {props.children}
      </main>
    </>
  );
};

export default Layout;
