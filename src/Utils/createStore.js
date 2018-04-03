import { createStore, applyMiddleware, compose } from 'redux';
import { autoRehydrate } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import RehydrationServices from '../Services/RehydrationServices'
import ReduxPersist from '../Config/ReduxPersist'
import logger from 'redux-logger';

// creates the store
export default (rootReducer, rootSaga) => {
  /* ------------- Redux Configuration ------------- */

  let middleware = [];
  const enhancers = [];

  /* ------------- Dev Middleware ------------- */
  if (__DEV__) {
    const reduxImmutableStateInvariant = require('redux-immutable-state-invariant').default();
    middleware = [...middleware, reduxImmutableStateInvariant, logger];
  } else {
    middleware = [...middleware];
  }

  /* ------------- Saga Middleware ------------- */

  const sagaMiddleware = createSagaMiddleware();
  middleware.push(sagaMiddleware);

  /* ------------- Redux Dev Tools Enhancer ------------- */
  
  const composeEnhancers =
    typeof window === 'object' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;
  
  /* ------------- Assemble Middleware ------------- */

  enhancers.push(composeEnhancers(applyMiddleware(...middleware)));

  /* ------------- AutoRehydrate Enhancer ------------- */

  // add the autoRehydrate enhancer
  if (ReduxPersist.active) {
    enhancers.push(autoRehydrate());
  }

  const store = createStore(rootReducer, compose(...enhancers));

  // configure persistStore and check reducer version number
  if (ReduxPersist.active) {
    RehydrationServices.updateReducers(store);
  }

  // kick off root saga
  sagaMiddleware.run(rootSaga);
  return store;
}
