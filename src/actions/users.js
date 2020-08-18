import { USERS_API_URI } from "../utils/vars";
import { handleSetAuthedUser } from "./authedUser";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export const GET_USERS = "GET_USERS";
export const ADD_USER = "ADD_USER";

/**
 * Action Handlers
 */

// TODO: add functionality to DELETE a user ( endpoint: DELETE /api/users )
// Send new user details to server for creation.  Server responds with a JSON user object
export const _handleAddUser = (user) => {
  return async (dispatch) => {
    dispatch(showLoading());
    await fetch(USERS_API_URI, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      referrerPolicy: "no-referrer",
      body: JSON.stringify(user)
    })
      .then((response) => response.json())
      .then((user) => {
        dispatch(addUser(user));
        dispatch(handleSetAuthedUser(user.user.username));
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
    ...users
  };
};

export const addUser = ({ user }) => {
  return {
    type: ADD_USER,
    user
  };
};
