import * as React from 'react';
import { ReactNode, StatelessComponent } from 'react';
import * as styles from './Cockpit.css';

interface CockPitProps {
  children?: ReactNode;
  title?: string;
  persons: { name: string, age: number }[];
  showPersons?: boolean;
  togglePersons: () => void;
}

const CockPit: StatelessComponent<CockPitProps> = (props: CockPitProps) => {

  let btnClass = styles.button;
  if (props.showPersons) {
    btnClass = [styles.red, styles.button].join(' ');
  }

  const assignedClasses = [];
  if (props.persons.length <= 2) {
    assignedClasses.push(styles.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(styles.bold);
  }

  return (
    <>
      <h1>Hi, I'm a {props.title} App</h1>
      <p className={assignedClasses.join(' ')} >This is really working!</p>
      <button
        className={btnClass}
        onClick={props.togglePersons}
      >
        Toggle Persons
      </button>
    </>
  );
};

CockPit.defaultProps = {
  title: 'React',
  showPersons: false
};

export default CockPit;
