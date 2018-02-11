import * as React from 'react';
import { ReactNode, StatelessComponent } from 'react';
import * as styles from './Person.css';

interface PersonProps {
  name?: string;
  age?: number;
  children?: ReactNode;
  changed: (e: React.FormEvent<HTMLInputElement>) => void;
  click: () => void;
}

const Person: StatelessComponent<PersonProps> = (props: PersonProps) => {

  return (
    <div className={styles.person}>
      <p onClick={props.click} >I'm {props.name}! and I am {props.age} years old</p>
      <p>{props.children}</p>
      <input
        type="text"
        onChange={props.changed}
        value={props.name}
      />
    </div>
  );
};

Person.defaultProps = {
  name: 'Lei',
  age: 26
};

export default Person;
