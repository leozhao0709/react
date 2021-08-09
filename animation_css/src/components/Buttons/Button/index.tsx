import React from 'react';
import classnames from 'classnames';
import styles from './index.module.scss';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
  text?: string;
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { className, text, children, ...restProps } = props;

  return (
    <button {...restProps} className={classnames(styles.Button, className)}>
      {text || children}
    </button>
  );
};

Button.defaultProps = {};

export default Button;
