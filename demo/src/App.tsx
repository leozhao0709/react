import * as React from 'react';
import * as styles from './App.css';
import Person from './components/Person/Person';

interface AppProps {
  title?: string;
}

interface AppState {
  persons: { name: string, age: number }[];
  showPersons: boolean;
}

class App extends React.Component<AppProps, AppState> {

  static defaultProps: AppProps = {
    title: 'React'
  };

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

    let btnClass = '';
    if (this.state.showPersons) {
      btnClass = styles.red;
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(styles.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(styles.bold);
    }

    return (
      <div className={styles.app} >
        <h1>Hi, I'm a {this.props.title} App</h1>
        <p className={assignedClasses.join(' ')} >This is really working!</p>
        <button
          className={btnClass}
          onClick={this.togglePersonsHandler}
        >
          Toggle Persons
        </button>
        {
          this.state.showPersons &&
          this.state.persons.map((person: { name: string, age: number }, index: number) => {
            return <Person
              name={person.name}
              age={person.age}
              key={index}
              changed={(e) => this.nameChangeHandler(e, index)}
              click={() => this.deletePersonHandler(index)}
            />;
          })
        }
      </div >
    );
  }
}

export default App;
