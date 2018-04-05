import { call, put } from 'redux-saga/effects';
import ClubDaysActions from '../Redux/ClubDays';

export function* clubdays(api, action) {
    const { token } = action;
    const response = yield call(api.getClubDays, token);

    if (response.ok) {
        yield put(ClubDaysActions.clubdaysSuccess(response.data))
    } else {
        yield put(ClubDaysActions.clubdaysFailure(response))
    }
}
