import * as React from 'react';
import { StatelessComponent } from 'react';
import * as styles from './Modal.css';

interface ModalProps {
  children?: React.ReactNode;
}

const Modal: StatelessComponent<ModalProps> = (props: ModalProps) => {
  return (
    <div className={styles.modal} >
      {props.children}
    </div>
  );
};

export default Modal;
