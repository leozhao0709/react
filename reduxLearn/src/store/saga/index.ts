import { takeEvery, all } from 'redux-saga/effects';
import { CounterResultActionType } from '../actions/Counter/index';
import { storeResultSaga } from './Counter/counter';

export function* watchCounterResult() {
    yield all([
        takeEvery(CounterResultActionType.STORE_RESULT_INIT, storeResultSaga),
    ]);
}