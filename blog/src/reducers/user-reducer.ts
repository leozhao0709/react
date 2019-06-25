import { UserAction, UserActionType, User } from '../actions/user-action';

export interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: []
};

const UserReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionType.FETCH_ONE_USER:
      return {
        ...state,
        users: [...state.users, action.payload as User]
      };
    case UserActionType.FETCH_USERS:
      return {
        ...state,
        users: action.payload as User[]
      };
    default:
      return state;
  }
};

export default UserReducer;
