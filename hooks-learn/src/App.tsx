import React, { useState } from 'react';
import './App.scss';
import { Todo } from './components/Todo';
import { Header } from './components/Header';
import { Auth } from './components/Auth';
import { AuthContext } from './context/auth-context';
import Counter from './components/Counter';
import CounterExtraBtn from './components/CounterExtraBtn';
import { createStore } from 'redux';
import { counterReducer } from './reducer/CounterReducer';
import { Provider } from 'react-redux';

const store = createStore(counterReducer);

const App: React.FC = () => {
  const [page, setPage] = useState('auth');
  const [authStatus, setAuthStatus] = useState(false);

  const login = () => setAuthStatus(true);
  return (
    <AuthContext.Provider value={{ authStatus, login }}>
      <Header onLoadTodos={() => setPage('todo')} onLoadAuth={() => setPage('auth')} />
      <hr />
      {page === 'todo' ? <Todo /> : <Auth />}
      <Provider store={store}>
        <Counter />
        <CounterExtraBtn />
      </Provider>
    </AuthContext.Provider>
  );
};

export default App;
