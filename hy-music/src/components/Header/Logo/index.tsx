import React from 'react';
import classnames from 'classnames';
import styles from './index.module.scss';

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Logo: React.FC<LogoProps> = (props: LogoProps) => {
  const { className, ...restProps } = props;

  return (
    <h1 {...restProps} className={classnames(styles.Logo, className)}></h1>
  );
};

Logo.defaultProps = {};

export default Logo;
