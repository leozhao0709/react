import * as React from 'react';
import { StatelessComponent } from 'react';
import * as styles from './CounterControl.css';

interface CounterControlProps {
    label: string;
    clicked: () => void;
}

const CounterControl: StatelessComponent<CounterControlProps> = (props: CounterControlProps) => {
    return (
        <div className={styles.counterControl} onClick={props.clicked} >
            {props.label}
        </div>
    );
};

CounterControl.defaultProps = {
};

export default CounterControl;
