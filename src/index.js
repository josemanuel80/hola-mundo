import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/normalize.css';
import App from './components/App.js';
import Header from './components/Header.js';
import { Main } from './components/Main.js';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App />
    <Main />
  </React.StrictMode>,
  document.getElementById('root'),
);
