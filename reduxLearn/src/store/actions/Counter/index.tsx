export enum CounterActionType {
    Inc = 'inc',
    Dec = 'dec',
    Add = 'add',
    Sub = 'sub'
}

export interface CounterAction {
    type: CounterActionType;
    val?: number;
}

export const increment = (): CounterAction => {
    return {
        type: CounterActionType.Inc
    };
};

export const decrement = (): CounterAction => {
    return {
        type: CounterActionType.Dec
    };
};

export const add = (val: number): CounterAction => {
    return {
        type: CounterActionType.Add,
        val: val,
    };
};

export const sub = (val: number): CounterAction => {
    return {
        type: CounterActionType.Sub,
        val: val,
    };
};

export enum CounterResultActionType {
    STORE_RESULT_INIT = 'STORE_RESULT_INIT',
    STORE_RESULT = 'STORE_RESULT',
    DELETE_RESULT = 'DELETE_RESULT',
}

export interface CounterResultAction {
    type: CounterResultActionType;
    result?: number;
    id?: Date;
}

export const storeResult = (res: number): CounterResultAction => {
    return {
        type: CounterResultActionType.STORE_RESULT_INIT,
        result: res,
    };
};
