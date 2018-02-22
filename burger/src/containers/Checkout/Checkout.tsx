import * as React from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { RouteComponentProps } from 'react-router';
import * as queryString from 'query-string';
import { Route } from 'react-router-dom';
import ContactData from './ContactData/ContactData';

interface CheckoutProps extends RouteComponentProps<{}> {
}

interface CheckoutState {
    ingredients: {
        [ingredientsType: string]: {
            amount: number;
            unitPrice: number;
        }
    } | null;
    totalPrice: number;
}

class Checkout extends React.Component<CheckoutProps, CheckoutState> {

    state: CheckoutState = {
        ingredients: null,
        totalPrice: 4.00
    };

    componentDidMount() {
        if (this.props.location.search) {
            const ingredients = JSON.parse(queryString.parse(this.props.location.search).ingredients);
            const totalPrice = queryString.parse(this.props.location.search).totalPrice;
            this.setState({ ingredients: ingredients, totalPrice: totalPrice });
        }
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.push('/checkout/contact-data');
    }

    render() {

        return (
            <div>
                {
                    this.state.ingredients &&
                    (
                        <>
                            <CheckoutSummary
                                ingredients={this.state.ingredients}
                                checkoutCancelled={this.checkoutCancelledHandler}
                                checkoutContinued={this.checkoutContinuedHandler}
                            />
                            <Route
                                path={this.props.match.url + '/contact-data'}
                                render={() => (
                                    <ContactData
                                        ingredients={this.state.ingredients}
                                        totalPrice={this.state.totalPrice}
                                    />)}
                            />
                        </>
                    )
                }
            </div>
        );
    }
}

export default Checkout;
