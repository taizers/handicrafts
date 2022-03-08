import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';

import reducer from './store/store';
import rootSaga from './sagas/index';
import history from "./history";
import App from '../src/components/App/index';
import { LOCALES } from "./locales/locales";


const init = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(reducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);

  ReactDOM.render(
          <Provider store={store}>
              <BrowserRouter history={history}>
                  <App />
              </BrowserRouter>
          </Provider>,
    document.querySelector('#root'));
};

init();
