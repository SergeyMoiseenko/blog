import {
  UI_LOGIN_FORM_CHANGE,
  UI_REGISTER_FORM_CHANGE
} from "../../actions/ActionTypes";

function formChange(type, target, value) {
  return {
    type,
    target,
    value
  };
}

export function loginFormChange(target, value) {
  return formChange(UI_LOGIN_FORM_CHANGE, target, value);
}

export function registerFormChange(target, value) {
  return formChange(UI_REGISTER_FORM_CHANGE, target, value);
}
