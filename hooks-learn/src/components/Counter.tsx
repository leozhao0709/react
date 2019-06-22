import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CounterState } from '../reducer/CounterReducer';

interface CounterProps extends React.HtmlHTMLAttributes<{}> {}

const Counter: React.FC<CounterProps> = (props: CounterProps) => {
  const count = useSelector((state: CounterState) => state.count);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      Count: {count}
      <button onClick={() => dispatch({ type: 'increament' })}>Inc</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Dec</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </React.Fragment>
  );
};

Counter.defaultProps = {};

export default Counter;
