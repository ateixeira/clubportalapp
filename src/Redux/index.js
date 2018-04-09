import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import navigation from './Navigation';
import configureStore from './createStore';
import rootSaga from '../Sagas/';
import ReduxPersist from '../Config/ReduxPersist';

const reducers = combineReducers({
  navigation: require('./Navigation').reducer,
  appState: require('./AppStateRedux').reducer,
  login: require('./Login').reducer,
  user: require('./User').reducer,
  clubdays: require('./ClubDays').reducer,
});

export default () => {
  let finalReducers = reducers;
  // If rehydration is on use persistReducer otherwise default combineReducers
  if (ReduxPersist.active) {
    const persistConfig = ReduxPersist.storeConfig;
    finalReducers = persistReducer(persistConfig, reducers);
  }

  let { store, sagasManager, sagaMiddleware } = configureStore(finalReducers, rootSaga);

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./').reducers;
      store.replaceReducer(nextRootReducer);

      const newYieldedSagas = require('../Sagas').default;
      sagasManager.cancel();
      sagasManager.done.then(() => {
        sagasManager = sagaMiddleware.run(newYieldedSagas);
      });
    });
  }

  return store;
}
