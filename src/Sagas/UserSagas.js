import { call, put } from 'redux-saga/effects';
import UserActions from '../Redux/User';

export function* user(api, action) {
    const { username, token } = action;
    const response = yield call(api.getUser, username, token);

    if (response.ok) {
        yield put(UserActions.userDetailsSuccess(response.data))
    } else {
        yield put(UserActions.userDetailsFailure(response))
    }
}
