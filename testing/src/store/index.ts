import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { CommentsState } from '../reducers/comments';
import { rootReducer } from '../reducers';
import thunk from 'redux-thunk';
import { AuthState } from '../reducers/auth';

export interface StoreState {
  commentsState: CommentsState;
  authState: AuthState;
}

const Store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default Store;
