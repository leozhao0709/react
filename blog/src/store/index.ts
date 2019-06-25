import { createStore, applyMiddleware } from 'redux';
import { PostState } from '../reducers/posts-reducer';
import { reducers } from '../reducers/index';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { UserState } from '../reducers/user-reducer';

export interface StoreState {
  postsState: PostState;
  usersState: UserState;
}

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
