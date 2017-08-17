import uiReducer from "./UI";
import userReducer from "./userReducer";
import * as status from "../utils/StatusTypes";
import {
  LOGIN_BEGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_USER
} from "../actions/ActionTypes";

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

export default function rootReducer(state, action) {
  return {
    UI: uiReducer(state.UI, action),
    user: userReducer(state.user, action),
    loginStatus: loginStatus(state.loginStatus, action)
  };
}
