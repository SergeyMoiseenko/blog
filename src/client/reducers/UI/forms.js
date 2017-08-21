import {
  UI_LOGIN_FORM_CHANGE,
  UI_REGISTER_FORM_CHANGE,
  REGISTRATION_BEGIN,
  REGISTRATION_ERROR,
  REGISTRATION_SUCCESS
} from "../../actions/ActionTypes";

import * as status from "../../utils/StatusTypes";

function baseFormReducer(actionType, state, action) {
  if (action.type === actionType) {
    return Object.assign({}, state, { [action.target]: action.value });
  }

  return state;
}

export function loginForm(state, action) {
  if (state === undefined) {
    return {};
  }
  return baseFormReducer(UI_LOGIN_FORM_CHANGE, state, action);
}

export function registerForm(state, action) {
  if (state === undefined) {
    return { registrationStatus: status.REGISTRATION_UNDEFINED };
  }

  switch (action.type) {
    case UI_REGISTER_FORM_CHANGE:
      return baseFormReducer(UI_REGISTER_FORM_CHANGE, state, action);
    case REGISTRATION_BEGIN:
      return Object.assign({}, state, {
        registrationStatus: status.REGISTRATION_STARTED
      });
    case REGISTRATION_SUCCESS:
      return Object.assign({}, state, {
        registrationStatus: status.REGISTRATION_SUCCESS
      });
    case REGISTRATION_ERROR:
      return Object.assign({}, state, {
        registrationStatus: status.REGISTRATION_FAILED,
        errors: action.message
      });
    default:
      return state;
  }
}
