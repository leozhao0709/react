import React from 'react';
import './App.css';
import { Route, HashRouter, Redirect, Switch } from 'react-router-dom';
import StreamList from './components/container/StreamList';
import StreamCreate from './components/container/StreamCreate';
import StreamEdit from './components/container/StreamEdit';
import StreamDelete from './components/container/StreamDelete';
import StreamShow from './components/container/StreamShow';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <HashRouter>
        <h1>Header</h1>
        <Switch>
          <Route path="/" exact component={StreamList} />
          <Route path="/stream/new" component={StreamCreate} />
          <Route path="/stream/edit" component={StreamEdit} />
          <Route path="/stream/delete" component={StreamDelete} />
          <Route path="/stream/show" component={StreamShow} />
          <Redirect to="/" />
        </Switch>
      </HashRouter>
    </React.Fragment>
  );
};

export default App;
