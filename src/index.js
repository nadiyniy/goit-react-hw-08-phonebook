import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import { store } from 'redux/store';
import { App } from 'components/App';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/goit-react-hw-08-phonebook">
    <Provider store={store}>
      <App />
      <ToastContainer />
    </Provider>
  </BrowserRouter>
);
