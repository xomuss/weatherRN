import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from 'src/models/reducers';
import rootSaga from 'src/models/sagas/rootSaga';

// --------------------- Create Middleware array storage --------------------------- //
const middlewares = [];

// ------ Add Flipper Redux debugger plugin middleware to middleware storage ------- //
if (__DEV__) {
  const reduxDebugger = require('redux-middleware-flipper').default;

  middlewares.push(reduxDebugger({}));
}

// -------------------- Add Saga middleware to middleware storage ------------------- //
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

// ------ Create store with apply middlewares and dev tools extension --------------- //
const Store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

// --------------- Start saga middleware and put into it the rootSaga --------------- //
sagaMiddleware.run(rootSaga);

export default Store;
