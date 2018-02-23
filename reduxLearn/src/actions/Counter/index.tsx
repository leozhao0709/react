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

export enum CounterResultActionType {
    STORE_RESULT = 'STORE_RESULT',
    DELETE_RESULT = 'DELETE_RESULT',
}

export interface CounterResultAction {
    type: CounterResultActionType;
    result?: number;
    id?: Date;
}
