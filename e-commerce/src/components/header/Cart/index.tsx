import * as React from 'react';
import CartIcon from './CartIcon';
import CartDropDown from './CartDropDown';
import styles from './Cart.module.scss';
import { useSelector } from 'react-redux';
import { StoreState } from '../../../redux/store';

interface CartProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Cart: React.FC<CartProps> = (props: CartProps) => {
  const [showCartDropDown, setShowCartDropDown] = React.useState(false);
  const cartState = useSelector((state: StoreState) => state.cartState);
  const cartItemsCount = cartState.cartItems.reduce((prev, curr) => prev + curr.quantity, 0);
  const toggleCartDropDown = () => {
    setShowCartDropDown(prevshowCartDropDown => !prevshowCartDropDown);
  };

  return (
    <div className={styles.cart}>
      <CartIcon cartItemsCount={cartItemsCount} className={styles.cartIcon} onClick={() => toggleCartDropDown()} />
      {showCartDropDown && (
        <div className={styles.dropDown}>
          <CartDropDown />
        </div>
      )}
    </div>
  );
};

Cart.defaultProps = {};

export default Cart;
