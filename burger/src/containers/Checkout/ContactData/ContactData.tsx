import * as React from 'react';
import Button from '../../../components/UI/Button/Button';
import { ButtonType } from '../../../components/UI/Button/Button';
import * as styles from './ContactData.css';
import ordersAxios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import { withRouter, RouteComponentProps } from 'react-router';

interface ContactDataProps extends RouteComponentProps<{}> {
    ingredients: {
        [ingredientsType: string]: {
            amount: number;
            unitPrice: number;
        }
    } | null;
    totalPrice: number;
}

interface ContactDataState {
    name: string;
    email: string;
    address: {
        street: string;
        postalCode: string
    };
    loading: boolean;
}

class ContactData extends React.Component<ContactDataProps, ContactDataState> {

    state: ContactDataState = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: '',
        },
        loading: false
    };

    orderHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        this.setState({ loading: true });
        const orders = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
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

        ordersAxios.post('/orders.json', orders)
            .then(response => {
                this.setState({ loading: false });
                this.props.history.replace('/');
            })
            .catch(err => {
                this.setState({ loading: false });
            })
            ;
    }

    render() {

        let form = (
            <form onSubmit={this.orderHandler} >
                <input type="text" name="name" placeholder="Your Name" />
                <input type="email" name="email" placeholder="Your Email" />
                <input type="text" name="street" placeholder="Street" />
                <input type="text" name="postal" placeholder="Postal Code" />
                <Button btnType={ButtonType.success} >ORDER</Button>
            </form>
        );

        if (this.state.loading) {
            form = <Spinner />;
        }

        return (
            <div className={styles.contactData} >
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }
}

export default withRouter(ContactData);
