import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import reduxLogger from "redux-logger";
import * as status from "../utils/StatusTypes";
import reducer from "../reducers";

export default options => {
  const middlewares = [thunkMiddleware];

  if (process.env.NODE_ENV === "development") {
    middlewares.push(reduxLogger);
  }

  const initialStore = {
    UI: {
      loginForm: {}
    },
    user: {
      isAuthorized: false
    },
    loginStatus: status.LOGIN_UNDEFINED
  };
  const store = createStore(
    reducer,
    initialStore,
    applyMiddleware(...middlewares)
  );

  if (module.hot) {
    module.hot.accept("../reducers", () => {
      store.replaceReducer(reducer);
    });
  }

  return store;
};
