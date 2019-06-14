import * as React from 'react';

interface CounterProps extends React.HtmlHTMLAttributes<{}> {}

const Counter: React.FC<CounterProps> = (props: CounterProps) => {
  const counterReducer = (state: { count: number }, action: { type: string; payload?: { count: number } }) => {
    switch (action.type) {
      case 'increament':
        return { count: state.count + 1 };
      case 'decrement':
        return { count: state.count - 1 };
      case 'set':
        return { count: action.payload!.count };
      case 'reset':
        return { count: 0 };
      default:
        return state;
    }
  };

  const [state, dispatch] = React.useReducer(counterReducer, { count: 0 });

  return (
    <React.Fragment>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increament' })}>Inc</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Dec</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </React.Fragment>
  );
};

Counter.defaultProps = {};

export default Counter;
