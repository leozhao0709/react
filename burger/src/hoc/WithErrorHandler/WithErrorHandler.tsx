import * as React from 'react';
import { AxiosInstance, AxiosError } from 'axios';
import Modal from '../../components/UI/Modal/Modal';

interface WithErrorHandlerState {
    error: AxiosError | null;
}

const WithErrorHandler =
    <P extends {}>(WrappedComponent: React.ComponentType<P>, AxionsInstance: AxiosInstance) => {

        return class extends React.Component<P, WithErrorHandlerState> {

            state: WithErrorHandlerState = {
                error: null,
            };

            private responseInterceptor: number;

            componentWillMount() {
                this.responseInterceptor = AxionsInstance.interceptors.response.use(res => res, err => {
                    this.setState({ error: err });
                });
            }

            componentWillUnmount() {
                // tslint:disable-next-line:no-console
                console.log(`before eject interceptors: ${this.responseInterceptor}`);
                AxionsInstance.interceptors.response.eject(this.responseInterceptor);
                // tslint:disable-next-line:no-console
                console.log(`after eject interceptors: ${this.responseInterceptor}`);
            }

            errorConfirmedHandler = () => {
                this.setState({ error: null });
            }

            render() {

                return (
                    <>
                        <Modal modalClosed={this.errorConfirmedHandler} show={this.state.error !== null} >
                            {this.state.error && this.state.error.message}
                        </Modal>
                        <WrappedComponent {...this.props} />
                    </>
                );
            }
        };
    };

export default WithErrorHandler;
