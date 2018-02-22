import * as React from 'react';
import { StatelessComponent } from 'react';
import * as styles from './Order.css';

interface OrderProps {
    price: number;
    ingredients: {
        [ingredientsType: string]: {
            amount: number;
            unitPrice: number;
        }
    };
}

const Order: StatelessComponent<OrderProps> = (props: OrderProps) => {

    const transformedIngredient = [];
    for (const key in props.ingredients) {
        if (props.ingredients.hasOwnProperty(key)) {
            const ingredient = props.ingredients[key];
            if (ingredient.amount !== 0) {
                transformedIngredient.push(
                    <span
                        key={key}
                        style={{
                            border: '1px solid #ccc',
                            margin: '0 8px',
                            padding: '5px',
                            textTransform: 'capitalize',
                            // display: 'inline-block',
                        }}
                    >
                        {key} ({ingredient.amount})
                    </span>
                );
            }
        }
    }

    return (
        <div className={styles.order} >
            <p>Ingredients: {transformedIngredient}</p>
            <p>Price: <strong>USD {(+props.price).toFixed(2)}</strong> </p>
        </div>
    );
};

Order.defaultProps = {
};

export default Order;
