import * as React from 'react';
import styles from './SignIn.module.scss';
import { FormInput, Button } from 'react-milhouse';
import { signInWithGoogle } from '../../utils/firebase.util';

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

        <div className={styles.signInBtnGroup}>
          <Button className={[styles.btn, styles.signInBtn].join(' ')} type="submit" text="SIGN IN" />
          <Button
            className={[styles.btn, styles.signInWithGoogleBtn].join(' ')}
            type="button"
            text="SIGN IN WITH GOOGLE"
            onClick={() => signInWithGoogle()}
          />
        </div>
      </form>
    </div>
  );
};

SignIn.defaultProps = {};

export default SignIn;
