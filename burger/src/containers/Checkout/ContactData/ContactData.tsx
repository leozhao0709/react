import * as React from 'react';
import Button from '../../../components/UI/Button/Button';
import { ButtonType } from '../../../components/UI/Button/Button';
import * as styles from './ContactData.css';

interface ContactDataProps {
}

interface ContactDataState {
    name: string;
    email: string;
    address: {
        street: string;
        postalCode: string
    };
}

class ContactData extends React.Component<ContactDataProps, ContactDataState> {

    static defaultProps: ContactDataProps = {
    };

    state: ContactDataState = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: '',
        }
    };

    render() {
        return (
            <div className={styles.contactData} >
                <h4>Enter your Contact Data</h4>
                <form action="">
                    <input type="text" name="name" placeholder="Your Name" />
                    <input type="email" name="email" placeholder="Your Email" />
                    <input type="text" name="street" placeholder="Street" />
                    <input type="text" name="postal" placeholder="Postal Code" />
                    <Button btnType={ButtonType.success} >ORDER</Button>
                </form>
            </div>
        );
    }
}

export default ContactData;
