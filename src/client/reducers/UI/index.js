import { combineReducers } from "redux";
import { UI_LOGIN_FORM_CHANGE } from "../../actions/ActionTypes";

function loginForm(formState, action) {
  if (formState === undefined) {
    return {};
  }

  if (action.type === UI_LOGIN_FORM_CHANGE) {
    return Object.assign({}, formState, {
      [action.target]: action.value
    });
  }

  return formState;
}

const reducer = combineReducers({
  loginForm
});

export default reducer;
