import { createStore, combineReducers, applyMiddleware } from 'redux';
import CounterReducer, { CounterState } from './reducers/Counter/counter';
import CounterResultReducer, { CounterResultState } from './reducers/Counter/result';
import createSagaMiddleware from 'redux-saga';
import { watchCounterResult } from './saga/index';

export interface StoreState {
    ctr: CounterState;
    res: CounterResultState;
}

const rootReducer = combineReducers({
    ctr: CounterReducer,
    res: CounterResultReducer,
});

const sagaMiddleware = createSagaMiddleware();

const Store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchCounterResult);

export default Store;