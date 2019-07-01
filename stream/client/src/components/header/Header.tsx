import * as React from 'react';
import { NavLink } from 'react-router-dom';

interface HeaderProps extends React.HtmlHTMLAttributes<{}> {}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  return (
    <React.Fragment>
      <header className="ui secondary pointing menu">
        <NavLink to="/" className="item">
          Streamy
        </NavLink>
        <div className="right menu">
          <NavLink to="/" className="item">
            All Streams
          </NavLink>
        </div>
      </header>
    </React.Fragment>
  );
};

Header.defaultProps = {};

export default Header;
