import * as React from 'react';
import styles from './CollectionItem.module.scss';
import { Button } from '@leozhao0709/react-millhouse';
import { useDispatch } from 'react-redux';
import { CartActions } from '../../../redux/actions/cartActions';

export interface collectionItem {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

interface CollectionItemProps extends collectionItem {}

const CollectionItem: React.FC<CollectionItemProps> = (props: CollectionItemProps) => {
  const { id, name, imageUrl, price } = props;
  const dispatch = useDispatch();

  const addProductItemToCart = () => {
    dispatch(
      CartActions.addItem({
        id,
        name,
        imageUrl,
        price
      })
    );
  };

  return (
    <div className={styles.collectionItem}>
      <div className={styles.image} style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className={styles.footer}>
        <div className="name">{name}</div>
        <div className="price">${price}</div>
      </div>
      <Button type="button" text="ADD TO CART" className={styles.addToCartBtn} onClick={() => addProductItemToCart()} />
    </div>
  );
};

CollectionItem.defaultProps = {};

export default CollectionItem;
