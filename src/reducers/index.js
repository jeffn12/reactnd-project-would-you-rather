import { combineReducers } from "redux";

import { authedUserReducer } from "./authedUser";
import { usersReducer } from "./users";
import { pollsReducer } from "./polls";

export default combineReducers({
  authedUserReducer,
  usersReducer,
  pollsReducer
});
