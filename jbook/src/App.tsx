import React, { useEffect } from 'react';
import classnames from 'classnames';
import * as esbuildWasm from 'esbuild-wasm';
// const packageJson = require('../package.json');
import packageJson from '../package.json';

interface AppProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

// esbuild.wasm: https://unpkg.com/esbuild-wasm@0.8.27/esbuild.wasm
const App: React.FC<AppProps> = (props: AppProps) => {
  const { className, ...restProps } = props;

  const [input, setInput] = React.useState('');
  const [code, setCode] = React.useState('');

  useEffect(() => {
    esbuildWasm.initialize({
      worker: true,
      wasmURL: `https://unpkg.com/esbuild-wasm@${packageJson.dependencies['esbuild-wasm']}/esbuild.wasm`,
    });
  }, []);

  const onClick = async () => {
    const result = await esbuildWasm.transform(input, {
      loader: 'jsx',
      target: 'es2015',
    });
    setCode(result.code);
  };

  return (
    <div {...restProps} className={classnames(className)}>
      <textarea value={input} onChange={(e) => setInput(e.target.value)} />
      <div>
        <button onClick={onClick}>Submit</button>
      </div>
      <pre>{code}</pre>
    </div>
  );
};

App.defaultProps = {};

export default App;
