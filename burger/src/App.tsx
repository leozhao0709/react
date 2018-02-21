import * as React from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuild from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" exact component={BurgerBuild} />
            <Route path="/checkout" component={Checkout} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
