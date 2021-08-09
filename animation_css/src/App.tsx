import React from 'react';
import styles from './App.module.scss';
import ButtonsContainer from './components/Buttons';

const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <ButtonsContainer />
    </div>
  );
};

export default App;
