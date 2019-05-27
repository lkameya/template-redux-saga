import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './routes/AppRouter';
import store from './store';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
      <AppRouter />
  </Provider>,
  rootElement);

