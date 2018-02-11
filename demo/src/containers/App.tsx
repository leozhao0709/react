import * as React from 'react';
import * as styles from './App.css';
import Persons from '../components/Persons/Persons';
import CockPit from '../components/Cockpit/Cockpit';

interface AppProps {
  title?: string;
}

interface AppState {
  persons: { name: string, age: number }[];
  showPersons: boolean;
}

class App extends React.Component<AppProps, AppState> {

  state: AppState = {
    persons: [
      { name: 'Maximilian', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 27 }
    ],
    showPersons: false
  };

  nameChangeHandler = (e: React.FormEvent<HTMLInputElement>, index: number) => {
    const persons = this.state.persons.map((person: { name: string, age: number }, i: number) => {
      if (i === index) {
        person.name = e.currentTarget.value;
      }
      return person;
    });

    this.setState({
      persons
    });
  }

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  }

  deletePersonHandler = (index: number) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        persons: prevState.persons.filter((person, i) => {
          return i !== index;
        })
      };
    });
  }

  render() {

    return (
      <div className={styles.app} >
        <CockPit
          title={'Demo'}
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          togglePersons={this.togglePersonsHandler}
        />
        {
          this.state.showPersons &&
          <Persons
            persons={this.state.persons}
            click={this.deletePersonHandler}
            changed={this.nameChangeHandler}
          />
        }
      </div >
    );
  }
}

export default App;
