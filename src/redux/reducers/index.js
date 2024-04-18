import { combineReducers } from "redux";

import app from "./app";
import auth from "./auth";
import hospitals from "./hospitals";

export default combineReducers({
  app,
  auth,
  hospitals,
});
