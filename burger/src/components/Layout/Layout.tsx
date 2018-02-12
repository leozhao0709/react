import * as React from 'react';
import { ReactNode, StatelessComponent } from 'react';
import * as styles from './Layout.css';

interface LayoutProps {
  children?: ReactNode;
}

const Layout: StatelessComponent<LayoutProps> = (props: LayoutProps) => {
  return (
    <>
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main className={styles.content} >
        {props.children}
      </main>
    </>
  );
};

export default Layout;
