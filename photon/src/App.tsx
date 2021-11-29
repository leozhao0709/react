import React from 'react';
import styles from './App.module.scss';
import SearchBar from './components/searchBar';

const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <h1 className={styles.title}>Photon</h1>
      <SearchBar />
    </div>
  );
};

export default App;
