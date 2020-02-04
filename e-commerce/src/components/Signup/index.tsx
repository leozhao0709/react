import * as React from 'react';
import styles from './Signup.module.scss';
import { FormInput, Button } from '@leozhao0709/react-milhouse';
import { auth, createUserProfileDocument } from '../../utils/firebase.util';

interface SignUpProps {}

export const SignUp: React.FC<SignUpProps> = (props: SignUpProps) => {
  const displayNameInputRef = React.useRef<HTMLInputElement>(null);
  const emailInputRef = React.useRef<HTMLInputElement>(null);
  const passwordInputRef = React.useRef<HTMLInputElement>(null);
  const confirmPasswordInputRef = React.useRef<HTMLInputElement>(null);

  const signUpWithEmailAndPassword = async (e: React.FormEvent) => {
    e.preventDefault();

    const displayName = displayNameInputRef.current!.value;
    const email = emailInputRef.current!.value;
    const password = passwordInputRef.current!.value;
    const confirmPassword = confirmPasswordInputRef.current!.value;

    if (email === null || !displayName === null || password === null || confirmPassword === null) {
      alert(`all the field needed!`);
      return;
    }

    if (password !== confirmPassword) {
      alert(`passwords don't match`);
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email!, password!);
      await createUserProfileDocument(user, { displayName });

      displayNameInputRef.current!.value = '';
      emailInputRef.current!.value = '';
      passwordInputRef.current!.value = '';
      confirmPasswordInputRef.current!.value = '';
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  return (
    <div className={styles.signUp} onSubmit={e => signUpWithEmailAndPassword(e)}>
      <div className={styles.title}>I do not have an account</div>
      <div className={styles.subtitle}>Sign up with your email and password</div>
      <form className={styles.signUpForm}>
        <FormInput
          labelClass={styles.formLabel}
          className={styles.formControl}
          label="Display Name"
          type="text"
          inputref={displayNameInputRef}
          required
        />
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
        <FormInput
          labelClass={styles.formLabel}
          className={styles.formControl}
          label="Confirm Password"
          type="password"
          inputref={confirmPasswordInputRef}
          required
        />
        <Button className={styles.signUpBtn} type="submit" text="SIGN UP" />
      </form>
    </div>
  );
};

SignUp.defaultProps = {};

export default SignUp;
