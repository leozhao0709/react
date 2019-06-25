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
  // fetchUser: (userId: number) => {
  //   return async (dispatch: Dispatch, getState: () => StoreState) => {
  //     console.log(getState().usersState.users);
  //     if (!getState().usersState.users.some(user => user.id === userId)) {
  //       const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
  //       await dispatch({
  //         type: UserActionType.FETCH_USER,
  //         payload: response.data as User
  //       });
  //     }
  //   };
  // }
};
