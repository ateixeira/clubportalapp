import Actions, { reducer, INITIAL_STATE, isLoggedIn } from '../../src/Redux/Login';

describe('Login reducer', () => {

  const defaultState = (action) => reducer(INITIAL_STATE, action);

  it('sets a reasonable default', () => {
    const state = defaultState();
    expect(state).toEqual({
      "fetching": false,
      "username": null,
      "error": null,
      "token": null
    });
  })

  it('Should set the fetching flag properly on request', () => {
    const state = defaultState(Actions.loginRequest('u', 'p'));
    expect(state.fetching).toBe(true);
  });

});
