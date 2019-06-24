import { UserAction, UserActionType, User } from '../actions/user-action';

export interface UserState {
  users: User[];
  lastFetchedUser?: User;
}

const initialState: UserState = {
  users: []
};

const UserReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionType.FETCH_USER:
      return {
        ...state,
        lastFetchedUser: action.payload
      };
    default:
      return state;
  }
};

export default UserReducer;
