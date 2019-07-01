import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface ModalProps extends React.HtmlHTMLAttributes<{}> {}

const Modal: React.FC<ModalProps> = (props: ModalProps) => {
  return ReactDOM.createPortal(
    <div className="modal">
      <div className="content">asdasdasdasd</div>
    </div>,
    document.querySelector('body')!
  );
};

Modal.defaultProps = {};

export default Modal;
