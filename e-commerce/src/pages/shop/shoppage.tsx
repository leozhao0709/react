import * as React from 'react';

interface ShopPageProps extends React.HtmlHTMLAttributes<{}> {}

const ShopPage: React.FC<ShopPageProps> = (props: ShopPageProps) => {
  return <React.Fragment>SHOP PAGE</React.Fragment>;
};

ShopPage.defaultProps = {};

export default ShopPage;
