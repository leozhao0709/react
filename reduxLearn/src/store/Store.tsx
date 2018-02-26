import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
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

// tslint:disable-next-line:no-console
console.log(process.env.NODE_ENV);

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = compose;

const Store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(watchCounterResult);

export default Store;