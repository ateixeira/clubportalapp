import { takeLatest } from 'redux-saga/effects';
import API from '../Services/Api';
import DebugConfig from '../Config/DebugConfig';

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux';
import { LoginTypes } from '../Redux/Login';

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { login } from './LoginSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
    yield [
        // some sagas only receive an action
        takeLatest(StartupTypes.STARTUP, startup),
        takeLatest(LoginTypes.LOGIN_REQUEST, login, api),
    ]
}
