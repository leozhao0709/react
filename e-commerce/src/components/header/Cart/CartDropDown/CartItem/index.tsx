import * as React from 'react';
import styles from './CartItem.module.scss';

interface CartItemProps extends React.HTMLAttributes<HTMLDivElement> {
  cartItem: CartItem;
}

export const CartItem: React.FC<CartItemProps> = (props: CartItemProps) => {
  const { cartItem } = props;

  return (
    <div className={styles.cartItem}>
      <img src={cartItem.imageUrl} alt={cartItem.name} className={styles.cartItemImg} />
      <div className={styles.cartItemDetail}>
        <div className={styles.cartItemName}>{cartItem.name}</div>
        <div className={styles.cartItemPrice}>
          {cartItem.quantity} * ${cartItem.price}{' '}
        </div>
      </div>
    </div>
  );
};

CartItem.defaultProps = {};

export default CartItem;
