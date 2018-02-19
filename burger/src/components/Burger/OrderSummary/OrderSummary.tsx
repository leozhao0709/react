import * as React from 'react';
import Button from '../../UI/Button/Button';
import { ButtonType } from '../../UI/Button/Button';

interface OrderSummaryProps {
  ingredients: {};
  price: number;
  purchaseCancelled: () => void;
  purchaseContinued: () => void;
}

class OrderSummary extends React.Component<OrderSummaryProps, {}> {

  render() {
    return (
      <>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>
          {
            Object.keys(this.props.ingredients).map(igKey => {
              return (
                <li key={igKey}>
                  <span style={{ textTransform: 'capitalize' }} >{igKey}</span>: {this.props.ingredients[igKey].amount}
                </li>);
            })
          }
        </ul>
        <p><strong>Current price: {this.props.price}</strong></p>
        <p>Continue to check out?</p>
        <Button btnType={ButtonType.success} click={this.props.purchaseContinued} >Continue</Button>
        <Button btnType={ButtonType.cancel} click={this.props.purchaseCancelled} >Cancel</Button>
      </>
    );
  }
}

export default OrderSummary;
