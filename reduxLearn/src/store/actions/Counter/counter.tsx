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

export const CounterActions = {
    increment: (): CounterAction => {
        return {
            type: CounterActionType.Inc
        };
    },

    decrement: (): CounterAction => {
        return {
            type: CounterActionType.Dec
        };
    },

    add: (val: number): CounterAction => {
        return {
            type: CounterActionType.Add,
            val: val,
        };
    },

    sub: (val: number): CounterAction => {
        return {
            type: CounterActionType.Sub,
            val: val,
        };
    }
};