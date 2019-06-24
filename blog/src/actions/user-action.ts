import axios from 'axios';
import { Dispatch } from 'redux';
export enum UserActionType {
  FETCH_USER = 'FETCH_USER'
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export interface UserAction {
  type: UserActionType;
  payload?: User;
}

export const UserActions = {
  fetchUser: (userId: number) => {
    return async (dispatch: Dispatch) => {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
      dispatch({
        type: UserActionType.FETCH_USER,
        payload: response.data as User
      });
    };
  }
};
