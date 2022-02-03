import React from 'react';
import ReactDom from 'react-dom';
import './assets/styles/index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector('#root')
);
