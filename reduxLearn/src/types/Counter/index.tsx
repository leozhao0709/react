export interface CounterState {
    counter: number;
}

export interface CounterResultState {
    result: {
        id: Date;
        val: number;
    }[];
}