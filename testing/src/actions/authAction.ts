export enum AuthActionType {
  CHANGE_AUTH = 'CHANGE_AUTH'
}

export interface AuthAction {
  type: AuthActionType;
  payload?: {};
}

export const AuthActions = {
  changeAuth: () => {
    return {
      type: AuthActionType.CHANGE_AUTH
    };
  }
};
