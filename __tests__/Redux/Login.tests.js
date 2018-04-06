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

  it('sets the fetching flag properly on request', () => {
    const action = Actions.loginRequest('u', 'p');
    const state = defaultState(action);

    expect(state.fetching).toBe(true);
  });

  it('sets state properly on login success', () => {
    const action = Actions.loginSuccess('success', '7B967T976G976G7687B97SDAFS=');
    const state = defaultState(action);

    expect(state.username).toBe('success');
    expect(state.fetching).toBe(false);
    expect(state.token).toBe('7B967T976G976G7687B97SDAFS=');
  });

  it('sets state properly on login failure', () => {
    const action = Actions.loginFailure('Error message');
    const state = defaultState(action);

    expect(state.username).toBe(null);
    expect(state.fetching).toBe(false);
    expect(state.token).toBe(null);
    expect(state.error).toBe('Error message');
  });

  test('isLoggedIn selector must be truthy on login success', () => {
    const action = Actions.loginSuccess('success')
    const state = defaultState(action);

    expect(isLoggedIn(state)).toBe(true)
  })

  

});
