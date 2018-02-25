import { delay } from 'redux-saga';
import { put } from 'redux-saga/effects';
import { CounterResultAction, CounterResultActions } from '../../actions/Counter/result';

export function* storeResultSaga(action: CounterResultAction) {
    yield delay(2000);
    yield put(CounterResultActions.storeResultSucceed(action.result!));
}