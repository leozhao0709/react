import * as React from 'react';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import CounterControl from '../../components/CounterControl/CounterControl';
import { CounterActionType, CounterAction, CounterResultActionType } from '../../actions/Counter';
import { CounterState } from '../../types/Counter';
import { connect, Dispatch } from 'react-redux';
import { CounterResultState } from '../../types/Counter/index';
import { CounterResultAction } from '../../actions/Counter/index';

interface CounterStateProps {
    ctr: number;
    res: {
        id: Date;
        val: number;
    }[];
}

interface CounterDispatchProps {
    onIncCounter: () => CounterAction;
    onDecCounter: () => CounterAction;
    onAddCounter: () => CounterAction;
    onSubCounter: () => CounterAction;
    onStoreResult: (result: number) => void;
}

class Counter extends React.Component<CounterStateProps & CounterDispatchProps, CounterState> {

    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncCounter!} />
                <CounterControl label="Decrement" clicked={this.props.onDecCounter} />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
                <CounterControl label="Substract 5" clicked={this.props.onSubCounter} />
                <hr />
                <button onClick={() => { this.props.onStoreResult(this.props.ctr); }} >Store result</button>
                <ul>
                    {
                        this.props.res.map((res) => {
                            return <li key={res.val}>{res.val}</li>;
                        })
                    }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state: { ctr: CounterState, res: CounterResultState }) => {
    return {
        ctr: state.ctr.counter,
        res: state.res.result
    };
};

const mapDispatchToProps = (dispatch: Dispatch<CounterAction | CounterResultAction>): CounterDispatchProps => {
    return {
        onIncCounter: () => dispatch<CounterAction>({ type: CounterActionType.Inc }),
        onDecCounter: () => dispatch<CounterAction>({ type: CounterActionType.Dec }),
        onAddCounter: () => dispatch<CounterAction>({ type: CounterActionType.Add, val: 5 }),
        onSubCounter: () => dispatch<CounterAction>({ type: CounterActionType.Sub, val: 5 }),
        onStoreResult: (result) => dispatch<CounterResultAction>({
            type: CounterResultActionType.STORE_RESULT,
            result: result
        }
        )
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
