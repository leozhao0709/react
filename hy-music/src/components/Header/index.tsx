import React from 'react';
import styles from './index.module.scss';
import Nav from './Nav';
import classnames from 'classnames';

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const { className, ...restProps } = props;

  return (
    <div className={classnames(styles.header, className)} {...restProps}>
      <Nav />
      <div className={styles.diverLine} />
    </div>
  );
};

Header.defaultProps = {};

export default React.memo(Header);
