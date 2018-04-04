import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    userDetailsRequest: ['username', 'token'],
    userDetailsSuccess: ['details'],
    userDetailsFailure: ['error']
})

export const UserTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
    details: {},
    fetching: false
});

/* ------------- Reducers ------------- */

export const request = (state) => state.merge({ fetching: true });

// we've successfully retrieved user details
export const success = (state, { details }) =>
    state.merge({ fetching: false, details });

// we've had a problem retrieving user details
export const failure = (state, { error }) =>
    state.merge({ fetching: false, error });

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.USER_DETAILS_REQUEST]: request,
    [Types.USER_DETAILS_SUCCESS]: success,
    [Types.USER_DETAILS_FAILURE]: failure
})
