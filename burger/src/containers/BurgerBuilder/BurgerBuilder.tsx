import * as React from 'react';
import Burger from '../../components/Burger/Burger';

interface BurgerBuildProps {
}

interface BurgerBuildState {
  ingredients: {};
}

class BurgerBuild extends React.Component<BurgerBuildProps, BurgerBuildState> {

  static defaultProps: BurgerBuildProps = {
  };

  state: BurgerBuildState = {
    ingredients: {
      salad: 1,
      bacon: 2,
      cheese: 1,
      meat: 2
    }
  };

  render() {
    return (
      <>
        <Burger ingredients={this.state.ingredients} />
        <div>Build Controls</div>
      </>
    );
  }
}

export default BurgerBuild;
