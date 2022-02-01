import React from 'react';
import styles from './App.module.scss';
import { AppProps } from './App.props';
import { AppWrapper } from './App.style';

const App: React.FC<AppProps> = (props) => {
  // return <div className={styles.App}></div>;
  return <AppWrapper {...props} />;
};

export default App;
