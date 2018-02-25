import { CounterResultAction, CounterResultActionType } from '../../actions/Counter/index';
import { delay } from 'redux-saga';
import { put } from 'redux-saga/effects';

export function* storeResultSaga(action: CounterResultAction) {
    yield delay(2000);
    yield put({
        type: CounterResultActionType.STORE_RESULT,
        result: action.result
    });
}