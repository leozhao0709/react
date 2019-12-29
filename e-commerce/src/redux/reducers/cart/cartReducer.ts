import { CartAction, CartActionType } from '../../actions/cartActions';
import { addProductItemToCart, removeProductItemFromCart } from './cartUtil';

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
    case CartActionType.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeProductItemFromCart(state.cartItems, action.payload as ProductItem)
      };
    case CartActionType.CLEAR_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(cartItem => cartItem.id !== (action.payload as ProductItem).id)
      };
    default:
      return state;
  }
};

export default CartReducer;
