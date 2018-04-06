import { call, put } from 'redux-saga/effects';
import LoginActions from '../Redux/Login';
import { NavigationActions } from 'react-navigation';

// attempts to login
export function* login(api, action) {
    const { username, password } = action;

    //calling the authenticate api
    const response = yield call(api.authenticate, username, password);
    if (response.ok) {
        yield put(LoginActions.loginSuccess(username, response.data.id_token))
    } else {
        yield put(LoginActions.loginFailure(response.data.detail))
    }
}
