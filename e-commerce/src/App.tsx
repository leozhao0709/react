import React from 'react';
import HomePage from './pages/home/homepage';
import { Switch, Route, HashRouter } from 'react-router-dom';
import ShopPage from './pages/shop/shoppage';
import Header from './components/header/header';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </HashRouter>
  );
};

export default App;
