import React from 'react';
import './App.css';
import { PostList } from './components/postList/PostList';
import { Provider } from 'react-redux';
import store from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <PostList />
      </div>
    </Provider>
  );
};

export default App;
