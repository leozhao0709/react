import * as React from 'react';
import { counterReducer } from '../reducer/CounterReducer';

interface CounterProps extends React.HtmlHTMLAttributes<{}> {}

const Counter: React.FC<CounterProps> = (props: CounterProps) => {
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
