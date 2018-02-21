import * as React from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import { BurgerIngredientType } from '../../components/Burger/BurgerIngredient/BurgerIngredientType';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import ordersAxios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import WithErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler';
import { AxiosError } from 'axios';
import { RouteComponentProps } from 'react-router';
import * as queryString from 'query-string';

interface BurgerBuildProps extends RouteComponentProps<{}> {
}

interface BurgerBuildState {
    ingredients: {
        [ingredientsType: string]: {
            amount: number;
            unitPrice: number;
        }
    } | null;
    totalPrice: number;
    purchasable: boolean;
    purchasing: boolean;
    loading: boolean;
    errMsg: string | null;
}

class BurgerBuild extends React.Component<BurgerBuildProps, BurgerBuildState> {

    state: BurgerBuildState = {
        ingredients: null,
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false,
        errMsg: null,
    };

    componentDidMount() {
        ordersAxios.get('/ingredients.json')
            .then(res => {
                this.setState({ ingredients: res.data });
            })
            .catch((err: AxiosError) => {
                this.setState({ errMsg: err.message });
            });
    }

    updatePurchasable = (ingredients: {}) => {
        const sum = Object.keys(ingredients)
            .map((igKey) => {
                return ingredients[igKey].amount;
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
        const updateCount = this.state.ingredients![type].amount + 1;
        const newPrice = +(this.state.totalPrice + this.state.ingredients![type].unitPrice).toFixed(2);
        const updateIngredients = {
            ...this.state.ingredients!,
        };
        updateIngredients[type].amount = updateCount;

        this.setState({
            ingredients: updateIngredients,
            totalPrice: newPrice
        });

        this.updatePurchasable(updateIngredients);
    }

    removeIngredientHandler = (type: BurgerIngredientType) => {
        if (this.state.ingredients![type].amount <= 0) {
            return;
        }

        const updateCount = this.state.ingredients![type].amount - 1;
        const newPrice = +(this.state.totalPrice - this.state.ingredients![type].unitPrice).toFixed(2);
        const updateIngredients = {
            ...this.state.ingredients!,
        };
        updateIngredients[type].amount = updateCount;

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
        // this.setState({ loading: true });
        // const orders = {
        //     ingredients: this.state.ingredients,
        //     price: this.state.totalPrice,
        //     customer: {
        //         name: 'Lei Zhao',
        //         address: {
        //             street: 'Test Street 1',
        //             zipCode: '94065',
        //             country: 'US'
        //         },
        //         email: 'test@test.com'
        //     },
        //     deliveryMethod: 'fastest'
        // };

        // ordersAxios.post('/orders.json', orders)
        //     .then(response => {
        //         this.setState({ loading: false, purchasing: false });
        //     })
        //     .catch(err => {
        //         this.setState({ loading: false, purchasing: false });
        //     })
        //     ;

        const ingredients = {
            ingredients: JSON.stringify(this.state.ingredients)
        };
        const queryParams = queryString.stringify(ingredients);

        this.props.history.push({
            pathname: '/checkout',
            search: queryParams
        });
    }

    render() {
        let disabledInfo = { ...this.state.ingredients };
        for (const key in disabledInfo) {
            if (disabledInfo.hasOwnProperty(key)) {
                disabledInfo[key] = disabledInfo[key].amount <= 0;
            }
        }

        let burger = this.state.errMsg ? <p>Ingredients can't be loaded!</p> : <Spinner />;
        let orderSummary = null;

        if (this.state.ingredients) {

            orderSummary = (
                <OrderSummary
                    ingredients={this.state.ingredients!}
                    price={this.state.totalPrice}
                    purchaseCancelled={this.purchaseCancelHandler}
                    purchaseContinued={this.purchaseContinueHandler}
                />
            );

            burger = (
                <>
                    <Burger ingredients={this.state.ingredients!} />
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

        if (this.state.loading) {
            orderSummary = <Spinner />;
        }

        return (
            <>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler} >
                    {orderSummary}
                </Modal>
                {burger}
            </>
        );
    }
}

export default WithErrorHandler(BurgerBuild, ordersAxios);
