import * as React from 'react';
import { ReactNode } from 'react';
import * as styles from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

interface LayoutProps {
  children?: ReactNode;
}

interface LayoutState {
  showSideDrawer: boolean;
}

class Layout extends React.Component<LayoutProps, LayoutState> {

  state: LayoutState = {
    showSideDrawer: false
  };

  sideBarClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  }

  sideDrawerToggleHandler = () => {
    this.setState((prev) => {
      return { showSideDrawer: !prev.showSideDrawer };
    });
  }

  render() {
    return (
      <>
        <Toolbar drawerToggle={this.sideDrawerToggleHandler} />
        <SideDrawer show={this.state.showSideDrawer} closed={this.sideBarClosedHandler} />
        <main className={styles.content} >
          {this.props.children}
        </main>
      </>
    );
  }
}

export default Layout;
