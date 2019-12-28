import * as React from 'react';
import { ShoppingBagIcon } from 'react-milhouse';
import styles from './CartIcon.module.scss';

interface CartIconProps extends React.HTMLAttributes<HTMLDivElement> {
  cartItemsCount: number;
}

export const CartIcon: React.FC<CartIconProps> = (props: CartIconProps) => {
  const { className, cartItemsCount, ...otherProps } = props;

  return (
    <ShoppingBagIcon
      showCount={true}
      count={cartItemsCount}
      className={[styles.shoppingBagIcon, className].join(' ')}
      {...otherProps}
    />
  );
};

CartIcon.defaultProps = {};

export default CartIcon;
