import { CounterResultState } from '../../types/Counter/index';
import { CounterResultAction, CounterResultActionType } from '../../actions/Counter/index';

const initialState: CounterResultState = {
    result: [],
};

const CounterResultReducer = (state = initialState, action: CounterResultAction): CounterResultState => {
    switch (action.type) {
        case CounterResultActionType.STORE_RESULT:
            return {
                ...state,
                result: [...state.result, { id: new Date(), val: action.result! }]
            };
        default:
            return state;
    }
};

export default CounterResultReducer;
