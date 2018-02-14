import * as React from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import { BurgerIngredientType } from '../../components/Burger/BurgerIngredient/BurgerIngredientType';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

interface BurgerBuildProps {
}

interface BurgerBuildState {
  ingredients: {};
  totalPrice: number;
  purchasable: boolean;
  purchasing: boolean;
}

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

class BurgerBuild extends React.Component<BurgerBuildProps, BurgerBuildState> {

  static defaultProps: BurgerBuildProps = {
  };

  state: BurgerBuildState = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
  };

  updatePurchasable = (ingredients: {}) => {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((prev, el) => {
        return prev + el;
      }, 0)
      ;

    this.setState({
      purchasable: sum > 0
    });
  }

  addIngredientHandler = (type: BurgerIngredientType) => {
    const updateCount = this.state.ingredients[type] + 1;
    const newPrice = +(this.state.totalPrice + INGREDIENT_PRICES[type]).toFixed(2);
    const updateIngredients = {
      ...this.state.ingredients,
    };
    updateIngredients[type] = updateCount;

    this.setState({
      ingredients: updateIngredients,
      totalPrice: newPrice
    });

    this.updatePurchasable(updateIngredients);
  }

  removeIngredientHandler = (type: BurgerIngredientType) => {
    if (this.state.ingredients[type] <= 0) {
      return;
    }

    const updateCount = this.state.ingredients[type] - 1;
    const newPrice = +(this.state.totalPrice - INGREDIENT_PRICES[type]).toFixed(2);
    const updateIngredients = {
      ...this.state.ingredients,
    };
    updateIngredients[type] = updateCount;

    this.setState({
      ingredients: updateIngredients,
      totalPrice: newPrice
    });

    this.updatePurchasable(updateIngredients);
  }

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  }

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  }

  purchaseContinueHandler = () => {
    alert('Purchase continued!!!');
  }

  render() {
    let disabledInfo = { ...this.state.ingredients };
    for (const key in disabledInfo) {
      if (disabledInfo.hasOwnProperty(key)) {
        disabledInfo[key] = disabledInfo[key] <= 0;
      }
    }

    return (
      <>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler} >
          <OrderSummary
            ingredients={this.state.ingredients}
            price={this.state.totalPrice}
            purchaseCancelled={this.purchaseCancelHandler}
            purchaseContinued={this.purchaseContinueHandler}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          ordered={this.purchaseHandler}
        />
      </>
    );
  }
}

export default BurgerBuild;
