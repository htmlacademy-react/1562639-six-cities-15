import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './components/app/app';
import './polyfills';
import { store } from './store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getToken } from './services/token';
import { userActions } from './store/slices/user';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(
  getToken() ? userActions.checkAuth() : userActions.setNoAuth()
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer position='top-center' />
      <App />
    </Provider>
  </React.StrictMode>
);
