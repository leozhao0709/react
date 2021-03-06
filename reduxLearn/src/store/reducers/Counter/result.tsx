import { CounterResultAction, CounterResultActionType } from '../../actions/Counter/result';

export interface CounterResultState {
    result: {
        id: Date;
        val: number;
    }[];
}

const initialState: CounterResultState = {
    result: [],
};

const CounterResultReducer = (state = initialState, action: CounterResultAction): CounterResultState => {
    switch (action.type) {
        case CounterResultActionType.STORE_RESULT_SUCCEED:
            return {
                ...state,
                result: [...state.result, { id: new Date(), val: action.result! }]
            };
        default:
            return state;
    }
};

export default CounterResultReducer;
