/* eslint-disable import/no-anonymous-default-export */
import { createStore, applyMiddleware } from 'redux';
import reduxSaga from 'redux-saga';
import rootSaga from '../middleware/sagas';
import reducers from '../reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = reduxSaga();

export default () => {
  return {
    ...createStore(reducers, composeWithDevTools(
      applyMiddleware(sagaMiddleware))
    ),
    runSaga: sagaMiddleware.run(rootSaga)
  };
};