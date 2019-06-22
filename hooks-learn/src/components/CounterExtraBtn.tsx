import * as React from 'react';
import { useDispatch } from 'react-redux';

interface CounterExtraBtnProps extends React.HtmlHTMLAttributes<{}> {}

const CounterExtraBtn: React.FC<CounterExtraBtnProps> = (props: CounterExtraBtnProps) => {
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <button onClick={() => dispatch({ type: 'increament2' })}>counter plus 2</button>
    </React.Fragment>
  );
};

CounterExtraBtn.defaultProps = {};

export default CounterExtraBtn;
