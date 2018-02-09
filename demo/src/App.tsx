import * as React from 'react';
import * as styles from './App.css';
import Person from './Person/Person';

interface AppState {
  persons: { name: string, age: number }[];
}

interface AppProps {
  title?: string;
}

class App extends React.Component<AppProps, AppState> {

  static defaultProps: AppProps = {
    title: 'demo'
  };

  state: AppState = {
    persons: [
      { name: 'Max11', age: 28 },
      { name: 'Lei', age: 26 },
      { name: 'Manu', age: 29 },
    ]
  };

  render() {
    return (
      <div className={styles.App} >
        <h1>Hi, This is {this.props.title} App</h1>
        <p>This is really working!</p>
        <button>Switch Name</button>
        {this.state.persons.map((person, index) => {
          return <Person name={person.name} age={person.age} key={index} />;
        })}
        <Person />
      </div>
    );
  }
}

export default App;
