import * as React from 'react';
import Order from '../../components/Order/Order';
import ordersAxios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';

interface OrdersProps {
}

interface OrdersState {
    loading: boolean;
    orders: {
        id: string;
        customer: {
            name: string;
            email: string;
            address: {
                street: string;
                postalCode: string
            };
        };
        ingredients: {
            [ingredientsType: string]: {
                amount: number;
                unitPrice: number;
            }
        };
        price: number;
    }[];
}

class Orders extends React.Component<OrdersProps, OrdersState> {

    static defaultProps: OrdersProps = {
    };

    state: OrdersState = {
        loading: true,
        orders: [],
    };

    componentDidMount?() {
        ordersAxios.get('/orders.json')
            .then(res => {
                // tslint:disable-next-line:no-console
                console.log(res.data);

                const fetchedOrders = [];

                for (const key in res.data) {
                    if (res.data.hasOwnProperty(key)) {
                        fetchedOrders.push({
                            ...res.data[key],
                            id: key
                        });
                    }
                }

                this.setState({ loading: false, orders: fetchedOrders });
            })
            .catch(err => {
                this.setState({ loading: false });
            });
    }

    render() {
        let orders: JSX.Element | JSX.Element[] = this.state.orders.map((order) => {
            return <Order key={order.id} price={order.price} ingredients={order.ingredients} />;
        });

        if (this.state.loading) {
            orders = <Spinner />;
        }

        return (
            <div>
                {orders}
            </div>
        );
    }
}

export default Orders;
