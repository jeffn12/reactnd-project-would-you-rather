import { SET_AUTHED_USER } from "../actions/authedUser";

/**
 * authedUserReducer functions:
 *  set authed user - take a user ID, set it as authed user
 *
 */
export const authedUserReducer = (state = null, action) => {
  switch (action.type) {
    case SET_AUTHED_USER:
      return action.id;
    default:
      return state;
  }
};
