import { AuthAction, AuthActionType } from '../actions/authAction';

export interface AuthState {
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  isLoggedIn: false
};

const AuthReducer = (state = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case AuthActionType.CHANGE_AUTH:
      return {
        ...state,
        isLoggedIn: !state.isLoggedIn
      };
    default:
      return state;
  }
};

export default AuthReducer;
