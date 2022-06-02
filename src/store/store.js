import { compose, applyMiddleware } from 'redux';
import { legacy_createStore as createStore } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import { rootReducer } from './root-reducer';
import logger from 'redux-logger';
import { rootSaga } from './root-saga';

const sagaMiddleWare = createSagaMiddleware();

const middleWares = [
  process.env.NODE_ENV !== 'production' && logger,
  sagaMiddleWare,
].filter(Boolean);

const composeEnhancer =
  (process.env.NODE_ENV !== 'production' &&
    window &&
    window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_) ||
  compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);

sagaMiddleWare.run(rootSaga);
