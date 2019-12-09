import React from 'react';
import HomePage from './pages/HomePage';
import { Switch, Route, HashRouter } from 'react-router-dom';
import ShopPage from './pages/ShopPage';
import Header from './components/Header';
import SignInAndSignUpPage from './pages/SignInAndSignUpPage';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </HashRouter>
  );
};

export default App;
