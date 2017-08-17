import { combineReducers } from "redux";
import { AUTHORIZE_USER, LOGOUT_USER } from "../actions/ActionTypes";

export default function user(userState, action) {
  if (userState === undefined) {
    return {
      isAuthorized: false,
      name: "anonymous"
    };
  }

  switch (action.type) {
    case AUTHORIZE_USER:
      return Object.assign({}, userState, {
        isAuthorized: true,
        id: action.user.id,
        username: action.user.username
      });
    case LOGOUT_USER:
      return {
        isAuthorized: false,
        name: "anonymous"
      };
    default:
      return userState;
  }
}
