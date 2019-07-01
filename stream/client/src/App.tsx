import React from 'react';
import './App.css';
import { Route, HashRouter, Redirect, Switch } from 'react-router-dom';
import StreamList from './container/stream/StreamList';
import StreamCreate from './container/stream/StreamCreate';
import StreamEdit from './container/stream/StreamEdit';
import StreamDelete from './container/stream/StreamDelete';
import StreamShow from './container/stream/StreamShow';
import Header from './components/header/Header';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <main className="ui container">
        <HashRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/stream/new" component={StreamCreate} />
            <Route path="/stream/edit" component={StreamEdit} />
            <Route path="/stream/delete" component={StreamDelete} />
            <Route path="/stream/show" component={StreamShow} />
            <Redirect to="/" />
          </Switch>
        </HashRouter>
      </main>
    </React.Fragment>
  );
};

export default App;
