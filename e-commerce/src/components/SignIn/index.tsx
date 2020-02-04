import * as React from 'react';
import styles from './SignIn.module.scss';
import { FormInput, Button } from '@leozhao0709/react-milhouse';
import { signInWithGoogle, auth } from '../../utils/firebase.util';

interface SignInProps {}

export const SignIn: React.FC<SignInProps> = (props: SignInProps) => {
  const emailInputRef = React.useRef<HTMLInputElement>(null);
  const passwordInputRef = React.useRef<HTMLInputElement>(null);

  const signInWithEmailAndPassword = async (e: React.FormEvent) => {
    e.preventDefault();

    const email = emailInputRef.current!.value;
    const password = passwordInputRef.current!.value;

    if (email === null || password === null) {
      alert('Email and Password is required!');
    }

    try {
      await auth.signInWithEmailAndPassword(email!, password!);
      emailInputRef.current!.value = '';
      passwordInputRef.current!.value = '';
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  return (
    <div className={styles.signIn}>
      <div className={styles.title}>I already have an account</div>
      <div className={styles.subtitle}>Sign in with your email and password</div>

      <form className={styles.signInForm} onSubmit={e => signInWithEmailAndPassword(e)}>
        <FormInput
          labelClass={styles.formLabel}
          className={styles.formControl}
          label="Email"
          type="email"
          inputref={emailInputRef}
          required
        />
        <FormInput
          labelClass={styles.formLabel}
          className={styles.formControl}
          label="Password"
          type="password"
          inputref={passwordInputRef}
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
