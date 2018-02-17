import * as React from 'react';

const WithErrorHandler = <P extends {}>(WrappedComponent: React.ComponentType<P>) => {
    return class extends React.Component {
        render() {
            return (
                <>
                    <h1>2222</h1>
                    <WrappedComponent {...this.props} />
                </>
            );
        }
    };

};

export default WithErrorHandler;