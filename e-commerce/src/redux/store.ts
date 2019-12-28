import { createStore, applyMiddleware, Middleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { UserState } from './reducers/user/userReducer';
import { rootReducer } from './reducers/rootReducer';
import logger from 'redux-logger';
import { CartState } from './reducers/cart/cartReducer';

export interface StoreState {
  userState: UserState;
  cartState: CartState;
}

const middlewares: Middleware[] = [];

let store: Store;
if (process.env.NODE_ENV === 'production') {
  store = createStore(rootReducer, applyMiddleware(...middlewares));
} else {
  store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares, logger)));
}

export default store;
