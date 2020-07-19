import { combineReducers } from "redux";

import authedUserReducer from "./authedUser";
import userReducer from "./users";
import pollsReducer from "./polls";

export default combineReducers({
  authedUserReducer,
  userReducer,
  pollsReducer
});
