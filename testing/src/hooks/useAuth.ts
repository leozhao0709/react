import { RouteComponentProps } from 'react-router';
import { useSelector } from 'react-redux';
import { StoreState } from '../store';
import { useEffect } from 'react';

export const useAuth = (props: RouteComponentProps<{}>) => {
  const authState = useSelector((storeState: StoreState) => storeState.authState);
  useEffect(() => {
    if (!authState.isLoggedIn) {
      props.history.push('/');
    }
  }, [authState.isLoggedIn, props.history]);
};
