import { combineReducers } from 'redux';
import UserReducer from './user/userReducer';
import CartReducer from './cart/cartReducer';
import CategoryReducer from './category/categoryReducer';
import CollectionReducer from './collection/collectionReducer';

export const rootReducer = combineReducers({
  userState: UserReducer,
  cartState: CartReducer,
  categoryState: CategoryReducer,
  collectionState: CollectionReducer
});
