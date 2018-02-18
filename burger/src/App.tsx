import * as React from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuild from './containers/BurgerBuilder/BurgerBuilder';

class App extends React.Component {

  // state = {
  //   show: true,
  // };

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({ show: false });
  //   }, 3000);
  // }

  render() {
    return (
      <Layout>
        <BurgerBuild />
      </Layout>
    );
  }
}

export default App;
