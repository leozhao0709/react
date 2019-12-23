export enum UserActionType {
  SET_CURRENT_USER = 'SET_CURRENT_USER'
}

export interface UserAction {
  type: UserActionType;
  payload?: {};
}

export const UserActions = {
  setCurrentUser: (user: User | null) => ({
    type: UserActionType.SET_CURRENT_USER,
    payload: user
  })
};
