import { createStore, combineReducers, applyMiddleware } from 'redux';
import CounterReducer, { CounterState } from './reducers/Counter/counter';
import CounterResultReducer, { CounterResultState } from './reducers/Counter/result';
import thunk from 'redux-thunk';

export interface StoreState {
    ctr: CounterState;
    res: CounterResultState;
}

const rootReducer = combineReducers({
    ctr: CounterReducer,
    res: CounterResultReducer,
});

const Store = createStore(rootReducer, applyMiddleware(thunk));

export default Store;