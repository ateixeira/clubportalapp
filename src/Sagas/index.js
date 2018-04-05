import { takeLatest, takeEvery } from 'redux-saga/effects';
import API from '../Services/Api';
import DebugConfig from '../Config/DebugConfig';

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux';
import { LoginTypes } from '../Redux/Login';
import { UserTypes } from '../Redux/User';
import { ClubDaysTypes } from '../Redux/ClubDays';

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { login } from './LoginSagas'
import { user } from './UserSagas';
import { clubdays } from './ClubDaysSagas';

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
        takeLatest(UserTypes.USER_DETAILS_REQUEST, user, api),
        takeLatest(ClubDaysTypes.CLUBDAYS_REQUEST, clubdays, api)
    ]
}
