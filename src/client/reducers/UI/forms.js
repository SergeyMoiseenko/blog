import { combineReducers } from "redux";
import {
  UI_LOGIN_FORM_CHANGE,
  UI_REGISTER_FORM_CHANGE,
  REGISTRATION_BEGIN,
  REGISTRATION_SUCCESS,
  REGISTRATION_ERROR,
  LOGIN_BEGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_USER
} from "../../actions/ActionTypes";

import * as status from "../../utils/StatusTypes";

function inputsReducerBuilder(actionType) {
  return (state, action) => {
    if (state === undefined) {
      return {};
    }

    if (action.type === actionType) {
      return Object.assign({}, state, { [action.target]: action.value });
    }

    return state;
  };
}

function loginStatus(state, action) {
  if (state === undefined) {
    return status.LOGIN_UNDEFINED;
  }

  switch (action.type) {
    case LOGIN_BEGIN:
      return status.LOGIN_STARTED;
    case LOGIN_ERROR:
      return status.LOGIN_FAILED;
    case LOGIN_SUCCESS:
      return status.LOGIN_SUCCESS;
    case LOGOUT_USER:
      return status.LOGIN_UNDEFINED;
    default:
      return state;
  }
}

function registrationStatus(state, action) {
  if (state === undefined) {
    return status.REGISTRATION_UNDEFINED;
  }

  switch (action.type) {
    case REGISTRATION_BEGIN:
      return status.REGISTRATION_STARTED;
    case REGISTRATION_SUCCESS:
      return status.REGISTRATION_SUCCESS;
    case REGISTRATION_ERROR:
      return status.REGISTRATION_FAILED;
    default:
      return state;
  }
}

function registrationErrors(state, action) {
  if (state === undefined) {
    return {};
  }

  if (action.type === REGISTRATION_ERROR) {
    return action.message;
  }

  return state;
}

export const loginForm = combineReducers({
  loginStatus,
  inputs: inputsReducerBuilder(UI_LOGIN_FORM_CHANGE)
});

export const registerForm = combineReducers({
  registrationStatus,
  errors: registrationErrors,
  inputs: inputsReducerBuilder(UI_REGISTER_FORM_CHANGE)
});
