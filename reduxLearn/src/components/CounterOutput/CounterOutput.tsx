import * as React from 'react';
import { StatelessComponent } from 'react';
import * as styles from './CounterOutput.css';

interface CounterOutputProps {
    value: number;
}

const CounterOutput: StatelessComponent<CounterOutputProps> = (props: CounterOutputProps) => {
    return (
        <div className={styles.counterOurput} >
            Current Counter: {props.value}
        </div>
    );
};

CounterOutput.defaultProps = {
};

export default CounterOutput;
