import * as React from 'react';
import { User } from '../../actions/user-action';

interface UserHeaderProps extends React.HtmlHTMLAttributes<{}> {
  user?: User;
}

const UserHeader: React.FC<UserHeaderProps> = (props: UserHeaderProps) => {
  console.log('...render userHeader...');
  const user = props.user;
  return (
    <React.Fragment>
      <h4>{user && <div>{user.name}</div>}</h4>
    </React.Fragment>
  );
};

UserHeader.defaultProps = {};

export default UserHeader;
