import * as React from 'react';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import CounterControl from '../../components/CounterControl/CounterControl';
import { connect } from 'react-redux';
import {
    increment,
    decrement,
    add,
    sub,
    storeResult
} from '../../store/actions/Counter/index';
import { StoreState } from '../../store';
import { Dispatch } from 'redux';

interface CounterStateProps {
    ctr: number;
    res: {
        id: Date;
        val: number;
    }[];
}

interface CounterDispatchProps {
    onIncCounter: () => void;
    onDecCounter: () => void;
    onAddCounter: (val: number) => void;
    onSubCounter: (val: number) => void;
    onStoreResult: (result: number) => void;
}

class Counter extends React.Component<CounterStateProps & CounterDispatchProps, {}> {

    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncCounter!} />
                <CounterControl label="Decrement" clicked={this.props.onDecCounter} />
                <CounterControl label="Add 5" clicked={() => this.props.onAddCounter(5)} />
                <CounterControl label="Substract 5" clicked={() => this.props.onSubCounter(5)} />
                <hr />
                <button onClick={() => { this.props.onStoreResult(this.props.ctr); }} >Store result</button>
                <ul>
                    {
                        this.props.res.map((res) => {
                            return <li key={res.id.getTime()}>{res.val}</li>;
                        })
                    }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state: StoreState): CounterStateProps => {
    return {
        ctr: state.ctr.counter,
        res: state.res.result
    };
};

const mapDispatchToProps = (dispatch: Dispatch): CounterDispatchProps => {
    return {
        onIncCounter: () => dispatch(increment()),
        onDecCounter: () => dispatch(decrement()),
        onAddCounter: (val) => dispatch(add(val)),
        onSubCounter: (val) => dispatch(sub(val)),
        onStoreResult: (result) => dispatch(storeResult(result))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
