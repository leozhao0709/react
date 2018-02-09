import * as React from 'react';
// import './App.css';
import * as styles from './App.css';
import Person from './Person/Person';

class App extends React.Component {
  render() {
    return (
      <div className={styles.App} >
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <Person/>
      </div>
    );
  }
}

export default App;
