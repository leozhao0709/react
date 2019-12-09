import * as React from 'react';
import styles from './SignInAndSignUpPage.module.scss';
import SignIn from '../../components/SignIn';
import SignUp from '../../components/Signup';

interface SignInAndSignUpPageProps {}

export const SignInAndSignUpPage: React.FC<SignInAndSignUpPageProps> = (props: SignInAndSignUpPageProps) => {
  return (
    <div className={styles.signInAndSignUpPage}>
      <SignIn />
      <SignUp />
    </div>
  );
};

SignInAndSignUpPage.defaultProps = {};

export default SignInAndSignUpPage;
