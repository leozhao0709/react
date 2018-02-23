import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { createStore, combineReducers } from 'redux';
import CounterReducer from './store/reducers/counter';
import { Provider } from 'react-redux';
import CounterResultReducer from './store/reducers/result';

const rootReducer = combineReducers({
  ctr: CounterReducer,
  res: CounterResultReducer,
});
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
