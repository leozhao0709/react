import * as React from 'react';
import CollectionOverview from '../../components/Shop/CollectionOverview';
import { Route, useRouteMatch } from 'react-router-dom';
import CollectionPage from '../CollectionPage/index';

interface ShopPageProps extends React.HtmlHTMLAttributes<{}> {}

const ShopPage: React.FC<ShopPageProps> = (props: ShopPageProps) => {
  const match = useRouteMatch();

  return (
    <React.Fragment>
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionRouteName`} component={CollectionPage} />
    </React.Fragment>
  );
};

ShopPage.defaultProps = {};

export default ShopPage;
