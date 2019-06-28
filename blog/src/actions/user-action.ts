import { StoreState } from '../store';
import { Dispatch } from 'redux';
import axios from 'axios';

export enum UserActionType {
  FETCH_ONE_USER = 'FETCH_ONE_USER',
  FETCH_USERS = 'FETCH_USERS'
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export interface UserAction {
  type: UserActionType;
  payload?: User | User[];
}

export const UserActions = {
  fetchUsers: () => {
    return async (dispatch: Dispatch, getState: () => StoreState) => {
      const userIds = getState().postsState.posts.reduce(
        (prev, curr) => (prev.includes(curr.userId) ? prev : [...prev, curr.userId]),
        [] as number[]
      );

      const users = await Promise.all(
        userIds.map(async userId => (await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)).data)
      );

      dispatch({
        type: UserActionType.FETCH_USERS,
        payload: users
      });
    };
  }
};
