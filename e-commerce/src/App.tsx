import React, { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import { Switch, Route, HashRouter } from 'react-router-dom';
import ShopPage from './pages/ShopPage';
import Header from './components/Header';
import SignInAndSignUpPage from './pages/SignInAndSignUpPage';
import { auth, createUserProfileDocument } from './utils/firebase.util';

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  useEffect(() => {
    return auth.onAuthStateChanged(async user => {
      if (user) {
        const userRef = await createUserProfileDocument(user);
        if (userRef) {
          const snapshot = await userRef.get();
          console.log(snapshot.data());
          setCurrentUser(snapshot.data() as User);
        }
      } else {
        setCurrentUser(null);
      }
    });
  }, []);

  return (
    <HashRouter>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </HashRouter>
  );
};

export default App;
