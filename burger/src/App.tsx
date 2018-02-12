import * as React from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuild from './containers/BurgerBuilder/BurgerBuilder';

class App extends React.Component {
  render() {
    return (
      <Layout>
        <BurgerBuild />
      </Layout>
    );
  }
}

export default App;
