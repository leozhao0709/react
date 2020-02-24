import * as React from 'react';
import styles from './CheckoutItem.module.scss';
import { LeftArrowIcon, RightArrowIcon, CloseIcon } from '@leozhao0709/react-millhouse';
import { useDispatch } from 'react-redux';
import { CartActions } from '../../../redux/actions/cartActions';

interface CheckoutItemProps extends React.HTMLAttributes<HTMLDivElement> {
  item: CartItem;
}

export const CheckoutItem: React.FC<CheckoutItemProps> = (props: CheckoutItemProps) => {
  const { imageUrl, name, quantity, price } = props.item;
  const dispatch = useDispatch();

  const addProductItemToCart = () => dispatch(CartActions.addItem(props.item));
  const removeProductFromCart = () => dispatch(CartActions.removeItem(props.item));
  const clearProductFromCart = () => dispatch(CartActions.clearItem(props.item));

  return (
    <div className={styles.checkoutItem}>
      <div className={styles.imgContainer}>
        <img src={imageUrl} alt={name} />
      </div>
      <div className={styles.name}>{name}</div>
      <div className={styles.quantity}>
        <LeftArrowIcon className={styles.icon} onClick={() => removeProductFromCart()} />
        {quantity}
        <RightArrowIcon className={styles.icon} onClick={() => addProductItemToCart()} />
      </div>
      <div className={styles.price}>{price}</div>
      <div className={styles.remove}>
        <CloseIcon className={styles.icon} onClick={() => clearProductFromCart()} />
      </div>
    </div>
  );
};

CheckoutItem.defaultProps = {};

export default CheckoutItem;
