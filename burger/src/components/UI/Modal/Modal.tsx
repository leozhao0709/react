import * as React from 'react';
import * as styles from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';

interface ModalProps {
  children?: React.ReactNode;
  show?: boolean;
  modalClosed: () => void;
}

interface ModalState {
}

class Modal extends React.Component<ModalProps, ModalState> {

  shouldComponentUpdate?(nextProps: ModalProps) {
    return this.props.show !== nextProps.show;
  }

  render() {
    let style = {
      transform: 'translateY(-100vh)',
      opacity: 0,
    };
    if (this.props.show) {
      style = {
        transform: 'translateY(0)',
        opacity: 1
      };
    }

    return (
      <>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div className={styles.modal} style={style} >
          {this.props.children}
        </div>
      </>
    );
  }
}

export default Modal;
