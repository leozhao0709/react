import * as React from 'react';
import { ReactNode, StatelessComponent } from 'react';
import Person from './Person/Person';

interface PersonsProps {
  children?: ReactNode;
  persons: { name: string, age: number }[];
  click: (index: number) => void;
  changed: (e: React.FormEvent<HTMLInputElement>, index: number) => void;
}

const Persons: StatelessComponent<PersonsProps> = (props: PersonsProps) => {
  return (
    <div>
      {
        props.persons.map((person, index) => {
          return <Person
            name={person.name}
            age={person.age}
            changed={(e) => props.changed(e, index)}
            click={() => props.click(index)}
            key={index}
          />;
        })
      }
    </div>
  );
};

Persons.defaultProps = {
};

export default Persons;
