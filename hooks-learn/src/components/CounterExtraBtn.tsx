import * as React from 'react';
import { counterReducer } from '../reducer/CounterReducer';

interface CounterExtraBtnProps extends React.HtmlHTMLAttributes<{}> {}

const CounterExtraBtn: React.FC<CounterExtraBtnProps> = (props: CounterExtraBtnProps) => {
  const [, dispatch] = React.useReducer(counterReducer, { count: 0 });

  return (
    <React.Fragment>
      <button onClick={() => dispatch({ type: 'increament2' })}>counter plus 2</button>
    </React.Fragment>
  );
};

CounterExtraBtn.defaultProps = {};

export default CounterExtraBtn;
