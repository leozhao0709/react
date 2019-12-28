import { CartAction, CartActionType } from '../../actions/cartActions';
import { addProductItemToCart } from './cartUtil';

export interface CartState {
  cartItems: CartItem[];
}

const initialState: CartState = {
  cartItems: []
};

const CartReducer = (state = initialState, action: CartAction): CartState => {
  switch (action.type) {
    case CartActionType.ADD_ITEM:
      return {
        ...state,
        cartItems: addProductItemToCart(state.cartItems, action.payload as ProductItem)
      };
    default:
      return state;
  }
};

export default CartReducer;
