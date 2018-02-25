import * as React from 'react';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import CounterControl from '../../components/CounterControl/CounterControl';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { CounterActions } from '../../store/actions/Counter/counter';
import { CounterResultActions } from '../../store/actions/Counter/result';
import { StoreState } from '../../store/Store';

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
        onIncCounter: () => dispatch(CounterActions.increment()),
        onDecCounter: () => dispatch(CounterActions.decrement()),
        onAddCounter: (val) => dispatch(CounterActions.add(val)),
        onSubCounter: (val) => dispatch(CounterActions.sub(val)),
        onStoreResult: (result) => dispatch(CounterResultActions.storeResult(result))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
