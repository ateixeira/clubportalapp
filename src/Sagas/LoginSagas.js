import { call, put } from 'redux-saga/effects';
import LoginActions from '../Redux/Login';
import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../Navigators/AppNavigator';
// import LoggedInActions, { isLoggedIn } from '../Redux/Login';

const { navigate, reset } = NavigationActions;
const { getStateForAction } = AppNavigator.router;

// attempts to login
// export function * login ({ username, password }) {
export function* login(api, action) {
    const { username, password } = action;
    console.log('ON LOGIN SagAAA --> ', username, password);
    //calling the authenticate api
    const response = yield call(api.authenticate, username, password);
    console.log('ON LOGIN SagAAA response --> ', response);
    if (response.ok) {
        // const firstUser = path(['data', 'items'], response)[0]
        // const avatar = firstUser.avatar_url
        // do data conversion here if needed
        yield put(LoginActions.loginSuccess(username, response.data.id_token))
        // yield put();
    } else {
        yield put(LoginActions.loginFailure(response))
    }
}
