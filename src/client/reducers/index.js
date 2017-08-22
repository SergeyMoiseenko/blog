import uiReducer from "./UI";
import userReducer from "./userReducer";

export default function rootReducer(state, action) {
  return {
    UI: uiReducer(state.UI, action),
    user: userReducer(state.user, action)
  };
}
