import * as actions from "./ActionTypes";
import AuthService from "../services/auth";
import UserService from "../services/users";

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

function loginFailed() {
  return {
    type: actions.LOGIN_ERROR
  };
}

function startRegistration() {
  return {
    type: actions.REGISTRATION_BEGIN
  };
}

function registrationSuccess() {
  return {
    type: actions.REGISTRATION_SUCCESS
  };
}

function registrationFailed(message) {
  return {
    type: actions.REGISTRATION_ERROR,
    message
  };
}

function authorizeUser(user) {
  return {
    type: actions.AUTHORIZE_USER,
    user
  };
}

export function loginUser(username, password) {
  return dispatch => {
    dispatch(startLogin());

    AuthService.authorize(username, password).then(result => {
      if (result.isAuthorized) {
        dispatch(authorizeUser(result.user));
        dispatch(loginSuccess());
      } else {
        dispatch(loginFailed());
      }
    });
  };
}

export function registerUser(username, email, password) {
  return dispatch => {
    dispatch(startRegistration());
    UserService.createUser(username, email, password).then(result => {
      if (result.isCreated) {
        dispatch(registrationSuccess());
      } else {
        dispatch(
          registrationFailed({
            username: result.usernameMessage,
            email: result.emailMessage
          })
        );
      }
    });
  };
}

export function logoutUser() {
  return {
    type: actions.LOGOUT_USER
  };
}
