import { combineReducers } from "redux";
import { loadingBarReducer } from "react-redux-loading-bar";
import { authedUserReducer as authedUser } from "./authedUser";
import { usersReducer as users } from "./users";
import { pollsReducer as polls } from "./polls";

export default combineReducers({
  authedUser,
  users,
  polls,
  loadingBar: loadingBarReducer
});
