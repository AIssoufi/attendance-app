// Constants
import * as Action from '../constants/auth.action-type';

// Services
import { AuthService } from '../../services';

// Actions
import { displayMessageError } from './error.action';

export const requestLogIn = () => {
  return {
    type: Action.REQUEST_LOG_IN
  };
};

export const invalidateLogInRequest = () => ({
  type: Action.INVALIDATE_LOG_IN_REQUEST
});

export const succefulLogIn = user => {
  return {
    type: Action.SUCCESSFUL_LOG_IN,
    payload: user
  };
};

export function login({ username, password }) {
  return function (dispatch) {
    dispatch(requestLogIn());

    return AuthService.login({ username, password })
      .then(user => {
        dispatch(succefulLogIn(user));
        return user;
      }).catch(message => {
        dispatch(invalidateLogInRequest());
        dispatch(displayMessageError(message));

        throw message;
      });
  };
}

export const requestSignIn = () => {
  return {
    type: Action.REQUEST_SIGN_IN
  };
};

export const invalidateSignInRequest = () => ({
  type: Action.INVALIDATE_SIGN_IN_REQUEST
});

export const succefulSignIn = user => {
  return {
    type: Action.SUCCESSFUL_SIGN_IN,
    payload: user
  };
};

export function signin({ username, password }) {
  return function (dispatch, getState) {
    dispatch(requestSignIn());

    return AuthService.signin({ username, password })
      .then(user => {
        dispatch(succefulSignIn(user));
        return user;
      }).catch(message => {
        dispatch(invalidateSignInRequest());
        dispatch(displayMessageError(message));

        throw message;
      });
  };
}