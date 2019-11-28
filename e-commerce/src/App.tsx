import React from 'react';
import HomePage from './pages/home/homepage';
import { Switch, Route, HashRouter } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </HashRouter>
  );
};

export default App;
