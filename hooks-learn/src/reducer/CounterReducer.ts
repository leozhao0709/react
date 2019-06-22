export interface CounterState {
  count: number;
}

export const counterReducer = (state = { count: 0 }, action: { type: string; payload?: { count: number } }) => {
  switch (action.type) {
    case 'increament':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'set':
      return { count: action.payload!.count };
    case 'reset':
      return { count: 0 };
    case 'increament2':
      return { count: state.count + 2 };
    default:
      return state;
  }
};
