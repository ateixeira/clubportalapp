import { put, select } from 'redux-saga/effects';
import AppStateActions from '../Redux/AppStateRedux';
import LoggedInActions, { isLoggedIn } from '../Redux/Login';

// exported to make available for tests
export const selectLoggedInStatus = (state) => isLoggedIn(state.login);

// process STARTUP actions
export function * startup (action) {
  yield put(AppStateActions.setRehydrationComplete())
  const isLoggedIn = yield select(selectLoggedInStatus);
  if (isLoggedIn) {
    yield put(LoggedInActions.autoLogin())
  }
}
