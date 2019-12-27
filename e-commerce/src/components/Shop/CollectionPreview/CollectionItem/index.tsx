import * as React from 'react';
import styles from './CollectionItem.module.scss';
import { Button } from 'react-milhouse';

export interface collectionItem {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

interface CollectionItemProps extends collectionItem {}

const CollectionItem: React.FC<CollectionItemProps> = (props: CollectionItemProps) => {
  return (
    <div className={styles.collectionItem}>
      <div className={styles.image} style={{ backgroundImage: `url(${props.imageUrl})` }}></div>
      <div className={styles.footer}>
        <div className="name">{props.name}</div>
        <div className="price">${props.price}</div>
      </div>
      <Button type="button" text="ADD TO CART" className={styles.addToCartBtn} />
    </div>
  );
};

CollectionItem.defaultProps = {};

export default CollectionItem;
