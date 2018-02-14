import * as React from 'react';
import { StatelessComponent } from 'react';
import * as styles from './Button.css';

export enum ButtonType {
  success = 'Success',
  cancel = 'Danger'
}

interface ButtonProps {
  children?: React.ReactNode;
  btnType: ButtonType;
  click?: () => void;
}

const Button: StatelessComponent<ButtonProps> = (props: ButtonProps) => {
  return (
    <button className={[styles.button, styles[props.btnType]].join(' ')} onClick={props.click} >
      {props.children}
    </button>
  );
};

Button.defaultProps = {
  btnType: ButtonType.success
};

export default Button;
