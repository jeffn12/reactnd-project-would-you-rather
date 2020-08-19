import { showLoading, hideLoading } from "react-redux-loading-bar";

export const SET_AUTHED_USER = "SET_AUTHED_USER";

/**
 * authedUser actions:
 *  set authed user - send a user ID
 *
 */

export const handleSetAuthedUser = (username) => {
  return (dispatch) => {
    dispatch(showLoading());
    dispatch(setAuthedUser(username));
    dispatch(hideLoading());
  };
};

export const setAuthedUser = (username) => {
  return {
    type: SET_AUTHED_USER,
    id: username
  };
};
