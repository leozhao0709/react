import React, { useState } from 'react';
import './App.scss';
import { Todo } from './components/Todo';
import { Header } from './components/Header';
import { Auth } from './components/Auth';
import { AuthContext } from './context/auth-context';
import Counter from './components/Counter';
import CounterExtraBtn from './components/CounterExtraBtn';

const App: React.FC = () => {
  const [page, setPage] = useState('auth');
  const [authStatus, setAuthStatus] = useState(false);

  const login = () => setAuthStatus(true);
  return (
    <AuthContext.Provider value={{ authStatus, login }}>
      <Header onLoadTodos={() => setPage('todo')} onLoadAuth={() => setPage('auth')} />
      <hr />
      {page === 'todo' ? <Todo /> : <Auth />}
      <Counter />
      <CounterExtraBtn />
    </AuthContext.Provider>
  );
};

export default App;
