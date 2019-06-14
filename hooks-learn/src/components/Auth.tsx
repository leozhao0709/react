import * as React from 'react';
import { AuthContext } from '../context/auth-context';

interface AuthProps extends React.HtmlHTMLAttributes<{}> {}

export const Auth: React.FC<AuthProps> = (props: AuthProps) => {
  const authContext = React.useContext(AuthContext);

  return (
    <React.Fragment>
      <button onClick={() => authContext.login()}>Log in</button>
    </React.Fragment>
  );
};

Auth.defaultProps = {};
