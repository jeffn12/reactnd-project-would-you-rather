import { _saveUser } from "../utils/_DATA";
import { USERS_API_URI } from "../utils/vars";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import { setAuthedUser } from "./authedUser";

export const GET_USERS = "GET_USERS";
export const ADD_USER = "ADD_USER";

/**
 * Action Handlers
 */
// Add a new user to the database.  The API call returns a formatted user
export const handleAddUser = (user) => {
  return (dispatch) => {
    dispatch(showLoading());
    _saveUser(user)
      .then((formattedUser) => {
        dispatch(addUser(formattedUser));
        dispatch(setAuthedUser(formattedUser.id));
      })
      .catch((err) => {
        console.log("Error adding user: ", JSON.stringify(err));
        alert(
          `There was an error adding the user.  Please try again\n(error: status ${err.code}, ${err.message})`
        );
      });
    dispatch(hideLoading());
  };
};

// Send new user details to server for creation.  Server responds with a JSON user object
export const _handleAddUser = (user) => {
  return (dispatch) => {
    dispatch(showLoading());
    fetch(USERS_API_URI, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      referrerPolicy: "no-referrer",
      body: JSON.stringify(user)
    })
      .then((response) => response.json())
      .then((formattedUser) => {
        dispatch(addUser(formattedUser));
        dispatch(setAuthedUser(formattedUser.id));
      })
      .catch((err) => {
        console.log("Error adding user: ", JSON.stringify(err));
        alert(
          `There was an error adding the user.  Please try again\n(error: status ${err.code}, ${err.message})`
        );
      });
    dispatch(hideLoading());
  };
};

/**
 * Action Creators
 */
export const getUsers = (users) => {
  return {
    type: GET_USERS,
    users
  };
};

export const addUser = (user) => {
  return {
    type: ADD_USER,
    user
  };
};
