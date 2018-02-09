import * as React from 'react';
import { ReactNode, StatelessComponent } from 'react';

interface PersonProps {
  children?: ReactNode;
  name?: string;
  age?: number;
}

const Person: StatelessComponent<PersonProps> = (props: PersonProps) => {
  return (
    <div>
      <p>I'm {props.name} and I'm {props.age} </p>
      <p>{props.children}</p>
    </div>
  );
};

Person.defaultProps = {
  name: 'Lei',
  age: 28,
};

export default Person;
