import { _getQuestions, _getUsers } from "../utils/_DATA";
import { getPolls } from "./polls";
import { getUsers } from "./users";
import { setAuthedUser } from "./authedUser";

const AUTHED_USER = "jeffn12"; //for testing purposes... TODO: authed user will be set from login screen

export const handleInitialData = () => {
  return (dispatch) => {
    return Promise.all([_getQuestions(), _getUsers()]).then(
      ([questions, users]) => {
        dispatch(getPolls(questions));
        dispatch(getUsers(users));
        dispatch(setAuthedUser(AUTHED_USER));
      }
    );
  };
};
