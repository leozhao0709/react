import * as React from 'react';
import { StatelessComponent } from 'react';
import Burger from '../../Burger/Burger';
import Button, { ButtonType } from '../../UI/Button/Button';
import * as styles from './CheckoutSummaray.css';

interface CheckoutSummaryProps {
    ingredients: {
        [ingredientsType: string]: {
            amount: number;
            unitPrice: number;
        }
    } | null;

    checkoutCancelled: () => void;
    checkoutContinued: () => void;
}

const CheckoutSummary: StatelessComponent<CheckoutSummaryProps> = (props: CheckoutSummaryProps) => {
    return (
        <div className={styles.checkoutSummary} >
            <h1>We hope it tastes well!</h1>
            <div style={{ width: '100%', margin: 'auto' }} >
                <Burger ingredients={props.ingredients!} />
            </div>
            <Button btnType={ButtonType.cancel} click={props.checkoutCancelled} >CANCEL</Button>
            <Button btnType={ButtonType.success} click={props.checkoutContinued} >CONTINUE</Button>
        </div>
    );
};

CheckoutSummary.defaultProps = {
};

export default CheckoutSummary;
