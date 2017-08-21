import { combineReducers } from "redux";
import { loginForm, registerForm } from "./forms";

const reducer = combineReducers({
  loginForm,
  registerForm
});

export default reducer;
