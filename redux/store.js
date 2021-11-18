import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';

// const middleware = [];
//
// if (__DEV__ && process.env.JEST_WORKER_ID === undefined) {
//   const reduxDebugger = require('redux-middleware-flipper').default;
//
//   middleware.push(reduxDebugger({}));
// }

import reducer from './reducers';
import mySaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

// middleware.push(sagaMiddleware);

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(mySaga);

export default store;
