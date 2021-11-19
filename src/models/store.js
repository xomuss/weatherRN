import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from 'src/models/reducers';
import sagas from 'src/models/sagas';

const middlewares = [];

// ------ Add Flipper Redux debugger plugin middleware ------- //
if (__DEV__) {
  const reduxDebugger = require('redux-middleware-flipper').default;

  middlewares.push(reduxDebugger({}));
}

// ------ Add Saga middleware ------- //
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

// ------ Create store -------------- //
const Store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
);

// ----- Start saga middleware ------ //
sagaMiddleware.run(sagas);

export default Store;
