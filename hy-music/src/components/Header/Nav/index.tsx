import React from 'react';
import classnames from 'classnames';
import styles from './index.module.scss';
import Logo from '../Logo';
import NavUtils from '@app/utils/NavUtils';
import { NavLink } from 'react-router-dom';

interface NavProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Nav: React.FC<NavProps> = (props: NavProps) => {
  const { className, ...restProps } = props;

  return (
    <nav {...restProps} className={classnames(styles.nav, className)}>
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
                  key={item.title}
                >
                  {item.title}
                  {item.isHot && <span className={styles.hot} />}
                </a>
              );
            }
            return (
              <NavLink
                key={item.title}
                className={({ isActive }) =>
                  classnames(styles.navItem, { [styles.active]: isActive })
                }
                to={item.path}
              >
                {item.title}
              </NavLink>
            );
          })}
        </div>
        <div className={styles.rightSection}>
          <div className={styles.search}>
            <span className={styles.searchContainer}>
              <span className={classnames('iconfont icon-search')}></span>
              <input
                className={styles.searchInput}
                type="text"
                placeholder="音乐/视频/电台/用户"
              />
            </span>
          </div>
          <a
            className={styles.authorCenter}
            href="https://music.163.com/#/login?targetUrl=%2Fcreatorcenter"
            target="_blank"
            rel="noreferrer"
          >
            创作者中心
          </a>
          <a href="#" className={styles.logIn}>
            登录
          </a>
        </div>
      </div>
    </nav>
  );
};

Nav.defaultProps = {};

export default React.memo(Nav);
