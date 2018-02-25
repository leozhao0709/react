import { takeEvery, all } from 'redux-saga/effects';
import { storeResultSaga } from './Counter/counter';
import { CounterResultActionType } from '../actions/Counter/result';

export function* watchCounterResult() {
    yield all([
        takeEvery(CounterResultActionType.STORE_RESULT, storeResultSaga),
    ]);
}