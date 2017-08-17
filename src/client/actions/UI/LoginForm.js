import {
  UI_LOGIN_FORM_LOGIN_CHANGE,
  UI_LOGIN_FORM_PASSWORD_CHANGE,
  UI_LOGIN_FORM_CHANGE
} from "../../actions/ActionTypes";

// eslint-disable-next-line 
export function formChange(target, value) {
  return {
    type: UI_LOGIN_FORM_CHANGE,
    target,
    value
  };
}
