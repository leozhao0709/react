import { combineReducers } from 'redux';
import CommentsReducer from './comments';
import AuthReducer from './auth';

export const rootReducer = combineReducers({
  commentsState: CommentsReducer,
  authState: AuthReducer
});
