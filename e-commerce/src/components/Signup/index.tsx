import * as React from 'react';
import styles from './Signup.module.scss';
import { FormInput } from 'react-milhouse';

interface SignUpProps {}

export const SignUp: React.FC<SignUpProps> = (props: SignUpProps) => {
  return (
    <div className={styles.signUp}>
      <div className={styles.title}>I do not have an account</div>
      <div className={styles.subtitle}>Sign up with your email and password</div>
      <form className={styles.signUpForm}>
        <FormInput
          labelClass={styles.formLabel}
          className={styles.formControl}
          label="Display Name"
          type="text"
          required
        />
        <FormInput labelClass={styles.formLabel} className={styles.formControl} label="Email" type="email" required />
        <FormInput
          labelClass={styles.formLabel}
          className={styles.formControl}
          label="Password"
          type="password"
          required
        />
        <FormInput
          labelClass={styles.formLabel}
          className={styles.formControl}
          label="Confirm Password"
          type="password"
          required
        />
      </form>
    </div>
  );
};

SignUp.defaultProps = {};

export default SignUp;
