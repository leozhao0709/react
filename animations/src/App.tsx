import * as React from 'react';
import * as styles from './App.css';
import ToggleAnimationControl from './container/ToggleAnimationControl/ToggleAnimationControl';

const logo = require('./logo.svg');

class App extends React.Component {

  render() {
    return (
      <div className={styles.app}>
        <header className={styles.appHeader}>
          <img src={logo} className={styles.appLogo} alt="logo" />
          <h1 className={styles.appTitle}>Welcome to React</h1>
        </header>
        <p className={styles.appIntro}>
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <ToggleAnimationControl />
      </div>
    );
  }
}

export default App;
