import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import 'normalize.css';
import './styles/index.scss';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import { store } from './store/store';

const container = document.getElementById('root');

if (!container) {
  throw new Error('HTML Element with id "root" doesn\'t exist');
}

createRoot(container).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
