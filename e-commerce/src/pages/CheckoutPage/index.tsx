import * as React from 'react';
import styles from './CheckoutPage.module.scss';
import { useSelector } from 'react-redux';
import { StoreState } from '../../redux/store';
import CheckoutItem from '../../components/Checkout/CheckoutItem';

interface CheckoutPageProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CheckoutPage: React.FC<CheckoutPageProps> = (props: CheckoutPageProps) => {
  const cartItems = useSelector((state: StoreState) => state.cartState.cartItems);
  const totalPrice = cartItems.reduce((prev, cartItem) => prev + cartItem.price * cartItem.quantity, 0);

  return (
    <div className={styles.checkoutPage}>
      <div className={styles.header}>
        <div className={styles.headerItem}>Product</div>
        <div className={styles.headerItem}>Description</div>
        <div className={styles.headerItem}>Quantity</div>
        <div className={styles.headerItem}>Price</div>
        <div className={styles.headerItem}>Remove</div>
      </div>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} item={cartItem} />
      ))}
      <div className={styles.totalPrice}>TOTAL: ${totalPrice}</div>
    </div>
  );
};

CheckoutPage.defaultProps = {};

export default CheckoutPage;
