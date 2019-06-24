import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UserActions } from '../../actions/user-action';
import { StoreState } from '../../store/index';

interface UserHeaderProps extends React.HtmlHTMLAttributes<{}> {
  userId: number;
}

const UserHeader: React.FC<UserHeaderProps> = (props: UserHeaderProps) => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state: StoreState) => state.users.lastFetchedUser);

  React.useEffect(() => {
    dispatch(UserActions.fetchUser(props.userId));
  }, [dispatch, props.userId]);

  return (
    <React.Fragment>
      <div>{currentUser && currentUser.username}</div>
    </React.Fragment>
  );
};

UserHeader.defaultProps = {};

export default UserHeader;
