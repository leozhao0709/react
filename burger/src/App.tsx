import * as React from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuild from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Orders from './containers/Orders/Orders';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} />
            <Route path="/" component={BurgerBuild} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
