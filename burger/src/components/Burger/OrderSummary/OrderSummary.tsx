import * as React from 'react';
import { StatelessComponent } from 'react';
import Button from '../../UI/Button/Button';
import { ButtonType } from '../../UI/Button/Button';

interface OrderSummaryProps {
  ingredients: {};
  price: number;
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
      <p><strong>Current price: {props.price}</strong></p>
      <p>Continue to check out?</p>
      <Button btnType={ButtonType.success} >Continue</Button>
      <Button btnType={ButtonType.cancel} >Cancel</Button>
    </>
  );
};

OrderSummary.defaultProps = {
};

export default OrderSummary;
