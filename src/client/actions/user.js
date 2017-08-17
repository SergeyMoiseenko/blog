import * as actions from "./ActionTypes";
import AuthService from "../services/Authorize";

function loginFailed() {
  return {
    type: actions.LOGIN_ERROR
  };
}

function startLogin() {
  return {
    type: actions.LOGIN_BEGIN
  };
}

function loginSuccess(user) {
  return {
    type: actions.LOGIN_SUCCESS
  };
}

function authorizeUser(user) {
  return {
    type: actions.AUTHORIZE_USER,
    user
  };
}

// eslint-disable-next-line
export function loginUser(username, password) {
  return dispatch => {
    dispatch(startLogin());

    AuthService.authorize(username, password).then(result => {
      if (result.isAuthorized) {
        dispatch(loginSuccess());
        dispatch(authorizeUser(result.user));
      } else {
        dispatch(loginFailed());
      }
    });
  };
}

export function logoutUser() {
  return {
    type: actions.LOGOUT_USER
  };
}
