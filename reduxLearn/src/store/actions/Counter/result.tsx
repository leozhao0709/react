export enum CounterResultActionType {
    STORE_RESULT = 'STORE_RESULT',
    STORE_RESULT_SUCCEED = 'STORE_RESULT_SUCCEED',
    DELETE_RESULT = 'DELETE_RESULT',
}

export interface CounterResultAction {
    type: CounterResultActionType;
    result?: number;
    id?: Date;
}

export const CounterResultActions = {
    storeResult: (res: number): CounterResultAction => {
        return {
            type: CounterResultActionType.STORE_RESULT,
            result: res,
        };
    },

    storeResultSucceed: (res: number) => {
        return {
            type: CounterResultActionType.STORE_RESULT_SUCCEED,
            result: res,
        };
    }
};