import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/normalize.css';
import App from './components/App.js';
import Header from './components/Header.js';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
