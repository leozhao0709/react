import * as React from 'react';
import styles from './CartDropDown.module.scss';
import { Button } from 'react-milhouse';
import { useSelector } from 'react-redux';
import { StoreState } from '../../../../redux/store';
import CartItem from './CartItem';

interface CartDropDownProps extends React.HTMLAttributes<HTMLDivElement> {
  onCheckoutBtnClick: () => void;
}

export const CartDropDown: React.FC<CartDropDownProps> = (props: CartDropDownProps) => {
  const cartItems = useSelector((storeState: StoreState) => storeState.cartState.cartItems);

  return (
    <div className={styles.cartDropDown}>
      <div className={styles.cartItems}>
        {cartItems.length > 0 ? (
          cartItems.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem} />)
        ) : (
          <div className={styles.emptyMsg}> You cart is empty </div>
        )}
      </div>
      <Button className={styles.checkoutBtn} onClick={() => props.onCheckoutBtnClick()}>
        GO TO CHECK OUT
      </Button>
    </div>
  );
};

CartDropDown.defaultProps = {};

export default CartDropDown;
