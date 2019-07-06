import * as React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { StoreState } from '../store/index';
import { AuthActions } from '../actions/authAction';

interface HeaderProps extends React.HtmlHTMLAttributes<{}> {}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const authState = useSelector((storeState: StoreState) => storeState.authState);
  const dispatch = useDispatch();

  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/posts">Posts</Link>
      </li>
      <li>
        <button onClick={() => dispatch(AuthActions.changeAuth())}>
          {authState.isLoggedIn ? 'Sign Out' : 'Sign In'}
        </button>
      </li>
    </ul>
  );
};

Header.defaultProps = {};

export default Header;
