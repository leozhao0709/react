import React from 'react';
import styles from './App.module.scss';
import Footer from './components/Footer';
import Header from './components/Header';
import renderRoutes from './router/index';

const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <Header />
      {renderRoutes()}
      <Footer />
    </div>
  );
};

export default App;
