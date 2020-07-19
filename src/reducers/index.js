import { combineReducers } from "redux";

import { authedUserReducer as authedUser } from "./authedUser";
import { usersReducer as users } from "./users";
import { pollsReducer as polls } from "./polls";

export default combineReducers({
  authedUser,
  users,
  polls
});
