import * as React from 'react';
import SHOP_DATA from '../../data/shop.data';
import CollectionPreview from '../../components/shop/collection-preview';

interface ShopPageProps extends React.HtmlHTMLAttributes<{}> {}

const ShopPage: React.FC<ShopPageProps> = (props: ShopPageProps) => {
  const collections = SHOP_DATA;

  return (
    <div>
      {collections.map(collection => (
        <CollectionPreview key={collection.id} {...collection} />
      ))}
    </div>
  );
};

ShopPage.defaultProps = {};

export default ShopPage;
