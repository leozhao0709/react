import * as React from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import { BurgerIngredientType } from '../../components/Burger/BurgerIngredient/BurgerIngredientType';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import ordersAxios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import WithErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler';

interface BurgerBuildProps {
}

interface BurgerBuildState {
    ingredients: {};
    totalPrice: number;
    purchasable: boolean;
    purchasing: boolean;
    loading: boolean;
}

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

class BurgerBuild extends React.Component<BurgerBuildProps, BurgerBuildState> {

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
        loading: false
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
        this.setState({ loading: true });
        const orders = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Lei Zhao',
                address: {
                    street: 'Test Street 1',
                    zipCode: '94065',
                    country: 'US'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        };

        ordersAxios.post('/orders.jso', orders)
            .then(response => {
                this.setState({ loading: false, purchasing: false });
            })
            .catch(err => {
                this.setState({ loading: false, purchasing: false });
            })
            ;
    }

    render() {
        let disabledInfo = { ...this.state.ingredients };
        for (const key in disabledInfo) {
            if (disabledInfo.hasOwnProperty(key)) {
                disabledInfo[key] = disabledInfo[key] <= 0;
            }
        }

        let orderSummary = (
            <OrderSummary
                ingredients={this.state.ingredients}
                price={this.state.totalPrice}
                purchaseCancelled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler}
            />
        );

        if (this.state.loading) {
            orderSummary = <Spinner />;
        }

        return (
            <>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler} >
                    {orderSummary}
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

export default WithErrorHandler(BurgerBuild, ordersAxios);
