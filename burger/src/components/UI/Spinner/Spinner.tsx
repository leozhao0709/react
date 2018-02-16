import * as React from 'react';
import { StatelessComponent } from 'react';
import * as styles from './Spinner.css';

interface SpinnerProps {
}

const Spinner: StatelessComponent<SpinnerProps> = (props: SpinnerProps) => {
  return (
    <div className={styles.loader} >
      Loading...
    </div>
  );
};

Spinner.defaultProps = {
};

export default Spinner;
