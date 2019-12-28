import { combineReducers } from 'redux';
import UserReducer from './user/userReducer';
import CartReducer from './cart/cartReducer';

export const rootReducer = combineReducers({
  userState: UserReducer,
  cartState: CartReducer
});
