import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import store from './store/index';
import './index.css';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // Provider es el Componente de React que conecta Redux a toda la aplicación, le pasamos store que es donde tenemos toda la info guardada.
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
