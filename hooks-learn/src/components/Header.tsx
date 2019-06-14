import * as React from 'react';
import { AuthContext } from '../context/auth-context';

interface HeaderProps extends React.HtmlHTMLAttributes<{}> {
  onLoadTodos: () => void;
  onLoadAuth: () => void;
}

export const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const authContext = React.useContext(AuthContext);
  return (
    <header>
      {authContext.authStatus ? <button onClick={props.onLoadTodos}>Todo List</button> : null}
      <button onClick={props.onLoadAuth}>Auth</button>
    </header>
  );
};

Header.defaultProps = {};
