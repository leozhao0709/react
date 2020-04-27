import React from 'react';
import styles from './index.module.scss';
import Link from 'next/link';
import classNames from 'classnames';

interface NavProps extends React.HTMLAttributes<HTMLDivElement> {}

const Nav: React.FC<NavProps> = (props: NavProps) => {
  return (
    <nav className={styles.nav}>
      <Link href="/" as="/">
        <a className={styles.logo}></a>
      </Link>
      <div className={styles.middleItems}>
        <div className={styles.middleLeftItems}>
          <Link href="/" as="/">
            <a className={styles.active}>首页</a>
          </Link>
          <Link href="/" as="/">
            <a>下载App</a>
          </Link>
          <input className={styles.search} placeholder="搜索" />
        </div>
        <div className={styles.middleRightItems}>
          <Link href="/" as="/">
            <a>Aa</a>
          </Link>
          <Link href="/" as="/">
            <a>登录</a>
          </Link>
        </div>
      </div>
      <div className={styles.rightItems}>
        <button className={classNames(styles.button, styles.register)}>注册</button>
        <button className={classNames(styles.button, styles.writting)}>写文章</button>
      </div>
    </nav>
  );
};

Nav.defaultProps = {};

export default Nav;
