import * as React from 'react';
import { StatelessComponent } from 'react';
import * as styles from './Backdrop.css';

interface BackdropProps {
  show?: boolean;
  clicked: () => void;
}

const Backdrop: StatelessComponent<BackdropProps> = (props: BackdropProps) => {

  return (
    <>
      {props.show ? <div className={styles.backdrop} onClick={props.clicked} /> : null}
    </>
  );
};

Backdrop.defaultProps = {
  show: false,
};

export default Backdrop;
