import * as React from 'react';

const WithErrorHandler = (WrappedComponent) => {
    return class extends React.Component {
        render() {
            return (
                <>
                    <WrappedComponent />
                </>
            );
        }
    };

};

export default WithErrorHandler;