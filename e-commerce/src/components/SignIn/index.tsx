import * as React from 'react';
import styles from './SignIn.module.scss';
import { FormInput, Button } from 'react-milhouse';

interface SignInProps {}

export const SignIn: React.FC<SignInProps> = (props: SignInProps) => {
  return (
    <div className={styles.signIn}>
      <div className={styles.title}>I already have an account</div>
      <div className={styles.subtitle}>Sign in with your email and password</div>

      <form className={styles.signInForm}>
        <FormInput labelClass={styles.formLabel} className={styles.formControl} label="email" type="email" required />
        <FormInput
          labelClass={styles.formLabel}
          className={styles.formControl}
          label="password"
          type="password"
          required
        />

        <Button className={styles.submitBtn} type="submit" text="SIGN IN" />
      </form>
    </div>
  );
};

SignIn.defaultProps = {};

export default SignIn;
