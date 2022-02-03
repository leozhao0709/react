import React from 'react';
import classnames from 'classnames';
import { Link, NavLink } from 'react-router-dom';
import styles from './index.module.scss';
import Logo from './Logo/index';
import NavUtils from '../../utils/NavUtils';
import classNames from 'classnames';

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const { className, ...restProps } = props;

  return (
    <nav {...restProps} className={classnames(styles.header, className)}>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <Logo />
          {NavUtils.navItems().map((item) => {
            if (item.isLink) {
              return (
                <a
                  className={styles.navItem}
                  href={item.path}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.title}
                </a>
              );
            }
            return (
              <NavLink
                key={item.title}
                className={({ isActive }) =>
                  classNames(styles.navItem, { [styles.active]: isActive })
                }
                to={item.path}
              >
                {item.title}
              </NavLink>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {};

export default React.memo(Header);
