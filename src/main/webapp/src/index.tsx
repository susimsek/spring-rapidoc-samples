import React from 'react';
import { createRoot } from 'react-dom/client';
import './config/i18n';
import App from './app';
import { Provider } from 'react-redux';
import store from './config/store';

const rootEl = document.getElementById('root');
const root = createRoot(rootEl!);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
