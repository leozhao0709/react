import * as React from 'react';
import { StatelessComponent } from 'react';

interface OrderSummaryProps {
  ingredients: {};
}

const OrderSummary: StatelessComponent<OrderSummaryProps> = (props: OrderSummaryProps) => {
  return (
    <>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {
          Object.keys(props.ingredients).map(igKey => {
            return (
              <li key={igKey}>
                <span style={{ textTransform: 'capitalize' }} >{igKey}</span>: {props.ingredients[igKey]}
              </li>);
          })
        }
      </ul>
      <p>Continue to check out?</p>
    </>
  );
};

OrderSummary.defaultProps = {
};

export default OrderSummary;
