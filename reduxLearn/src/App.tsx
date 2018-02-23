import * as React from 'react';
import Counter from './containers/Counter/Counter';
import * as styles from './App.css';

class App extends React.Component {
  render() {
    return (
      <div className={styles.app}>
        <Counter />
      </div>
    );
  }
}

export default App;
