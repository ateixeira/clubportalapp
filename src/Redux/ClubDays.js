import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    clubdaysRequest: ['token'],
    clubdaysSuccess: ['items'],
    clubdaysFailure: ['error']
})

export const ClubDaysTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
    fetching: false,
    items: [],
    error: null
});

/* ------------- Reducers ------------- */

export const request = (state, { token }) =>
    state.merge({ fetching: true, token })

// we've successfully retrieved clubdays items
export const success = (state, { items }) =>
    state.merge({ fetching: false, error: null, items });

// we've had a problem retrieving clubdays items
export const failure = (state, { error }) =>
    state.merge({ fetching: false, error, items: null });

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.CLUBDAYS_REQUEST]: request,
    [Types.CLUBDAYS_SUCCESS]: success,
    [Types.CLUBDAYS_FAILURE]: failure
})
