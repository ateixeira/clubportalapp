import { combineReducers } from 'redux';
import navigation from './Navigation';
import configureStore from '../Utils/createStore';
import rootSaga from '../Sagas/'

export default () => {
    const rootReducer = combineReducers({
        navigation: require('./Navigation').reducer,
        appState: require('./AppStateRedux').reducer,
        login: require('./Login').reducer,
        user: require('./User').reducer,
        clubdays: require('./ClubDays').reducer,
    });

    return configureStore(rootReducer, rootSaga);
}
