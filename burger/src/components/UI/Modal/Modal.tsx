import * as React from 'react';
import { StatelessComponent } from 'react';
import * as styles from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';

interface ModalProps {
  children?: React.ReactNode;
  show?: boolean;
  modalClosed: () => void;
}

const Modal: StatelessComponent<ModalProps> = (props: ModalProps) => {
  let style = {
    transform: 'translateY(-100vh)',
    opacity: 0,
  };
  if (props.show) {
    style = {
      transform: 'translateY(0)',
      opacity: 1
    };
  }

  return (
    <>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div className={styles.modal} style={style} >
        {props.children}
      </div>
    </>
  );
};

Modal.defaultProps = {
  show: false,
};

export default Modal;
