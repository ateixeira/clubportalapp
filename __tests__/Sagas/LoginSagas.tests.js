import { call, put } from 'redux-saga/effects';
import { login } from '../../src/Sagas/LoginSagas';
import FixtureAPI from '../../src/Services/FixtureApi';
import LoginActions from '../../src/Redux/Login';

describe('Login Sagas', () => {

    const mock = { username: 'test.user', password: 'abc123' }
    
    it('should call api.authenticate', () => {
        const gen = login(FixtureAPI, mock);
        const { authenticate } = FixtureAPI;

        expect(gen.next().value).toEqual(call(authenticate, mock.username, mock.password));
    })

    it('should put success action if authenticate succeeds', () => {
        const gen = login(FixtureAPI, mock);
        const mock_response = { ok: true, data: { id_token: 'abc' }};

        gen.next();
        expect(gen.next(mock_response).value).toEqual(put(LoginActions.loginSuccess(mock.username, 'abc')));
    })

    it('should put failure action if authenticate does not succeed', () => {
        const gen = login(FixtureAPI, mock);
        const mock_response = { ok: false, data: { detail: 'FAIL' } };

        gen.next();
        expect(gen.next(mock_response).value).toEqual(put(LoginActions.loginFailure('FAIL')));
    })

});
