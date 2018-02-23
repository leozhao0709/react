import { CounterAction, CounterActionType } from '../../actions/Counter/index';
import { CounterState } from '../../types/Counter';

const initialState: CounterState = {
    counter: 0,
};

const CounterReducer = (state = initialState, action: CounterAction) => {

    const val = action.val ? action.val : 1;

    switch (action.type) {
        case CounterActionType.Inc:
            return {
                counter: state.counter + val
            };
        case CounterActionType.Dec:
            return {
                counter: state.counter - val
            };
        case CounterActionType.Add:
            return {
                counter: state.counter + val
            };
        case CounterActionType.Sub:
            return {
                counter: state.counter - val
            };
        default:
            return state;
    }

};

export default CounterReducer;