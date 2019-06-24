import { combineReducers } from 'redux';
import PostReducer from './posts-reducer';
import UserReducer from './user-reducer';

export const reducers = combineReducers({
  posts: PostReducer,
  users: UserReducer
});
