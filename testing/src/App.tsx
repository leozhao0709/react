import React from 'react';
import './App.css';
import CommentsBox from 'containers/CommentsBox';
import CommentsList from 'containers/CommentsList';
import { Provider } from 'react-redux';
import Store from './store';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from './containers/Header';

const App: React.FC = () => {
  return (
    <Provider store={Store}>
      <HashRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={CommentsList} />
          <Route path="/posts" exact component={CommentsBox} />
          <Redirect to="/" />
        </Switch>
      </HashRouter>
    </Provider>
  );
};

export default App;
