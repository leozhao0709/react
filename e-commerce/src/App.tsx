import React, { useEffect } from 'react';
import HomePage from './pages/HomePage';
import { Switch, Route, HashRouter, Redirect } from 'react-router-dom';
import ShopPage from './pages/ShopPage';
import Header from './components/Header';
import SignInAndSignUpPage from './pages/SignInAndSignUpPage';
import { auth, createUserProfileDocument } from './utils/firebase.util';
import { useDispatch, useSelector } from 'react-redux';
import { UserActions } from './redux/actions/userActions';
import { StoreState } from './redux/store';
import CheckoutPage from './pages/CheckoutPage';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state: StoreState) => state.userState.currentUser);

  useEffect(() => {
    return auth.onAuthStateChanged(async user => {
      if (user) {
        const userRef = await createUserProfileDocument(user);

        if (userRef) {
          const snapshot = await userRef.get();
          const currentUser = snapshot.data() as User;
          dispatch(UserActions.setCurrentUser(currentUser));
        }
      } else {
        dispatch(UserActions.setCurrentUser(null));
      }
    });
  }, [dispatch]);

  return (
    <HashRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/checkout" component={CheckoutPage} />
        <Route path="/signin" render={() => (currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />)} />
        <Redirect to="/" />
      </Switch>
    </HashRouter>
  );
};

export default App;
