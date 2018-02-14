import * as React from 'react';
import { StatelessComponent } from 'react';
import * as styles from './Logo.css';

const burgerLogo = require('../../assets/images/burger-logo.png');

interface LogoProps {
}

const Logo: StatelessComponent<LogoProps> = (props: LogoProps) => {
  return (
    <div className={styles.logo} >
      <img src={burgerLogo} alt="MyBurger" />
    </div>
  );
};

Logo.defaultProps = {
};

export default Logo;
