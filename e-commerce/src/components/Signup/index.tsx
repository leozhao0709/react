import * as React from 'react';
import styles from './Signup.module.scss';

interface SignUpProps {}

export const SignUp: React.FC<SignUpProps> = (props: SignUpProps) => {
  return <div className={styles.signUp}></div>;
};

SignUp.defaultProps = {};

export default SignUp;
