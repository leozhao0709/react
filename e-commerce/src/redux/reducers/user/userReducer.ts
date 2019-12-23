import { UserAction, UserActionType } from '../../actions/userActions';

export interface UserState {
  currentUser: User | null;
}

const initialState: UserState = {
  currentUser: null
};

const UserReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionType.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload as User | null
      };
    default:
      return state;
  }
};

export default UserReducer;
