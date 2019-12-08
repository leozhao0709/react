import * as React from 'react';
import SHOP_DATA from '../../data/shop.data';
import CollectionPreview from '../../components/Shop/CollectionPreview';
import styles from './ShopPage.module.scss';

interface ShopPageProps extends React.HtmlHTMLAttributes<{}> {}

const ShopPage: React.FC<ShopPageProps> = (props: ShopPageProps) => {
  const collections = SHOP_DATA;

  return (
    <div className={styles.shopPage}>
      <div className={styles.title}>Collections</div>
      {collections.map(collection => (
        <CollectionPreview key={collection.id} {...collection} />
      ))}
    </div>
  );
};

ShopPage.defaultProps = {};

export default ShopPage;
