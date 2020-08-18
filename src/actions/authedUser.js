export const SET_AUTHED_USER = "SET_AUTHED_USER";

/**
 * authedUser actions:
 *  set authed user - send a user ID
 *
 */
export const setAuthedUser = (username) => {
  return {
    type: SET_AUTHED_USER,
    id: username
  };
};
