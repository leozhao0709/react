import * as React from 'react';
import CollectionOverview from '../../components/Shop/CollectionOverview';

interface ShopPageProps extends React.HtmlHTMLAttributes<{}> {}

const ShopPage: React.FC<ShopPageProps> = (props: ShopPageProps) => {
  return (
    <React.Fragment>
      <CollectionOverview />
    </React.Fragment>
  );
};

ShopPage.defaultProps = {};

export default ShopPage;
