import * as React from 'react';
import { ShoppingBagIcon } from 'react-milhouse';
import styles from './CartIcon.module.scss';

interface CartIconProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CartIcon: React.FC<CartIconProps> = (props: CartIconProps) => {
  const { className, ...otherProps } = props;

  return <ShoppingBagIcon showCount={true} count={0} className={styles.shoppingBagIcon} {...otherProps} />;
};

CartIcon.defaultProps = {};

export default CartIcon;
