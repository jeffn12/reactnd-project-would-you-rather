import { _getQuestions, _getUsers } from "../utils/_DATA";
import { getPolls } from "./polls";
import { getUsers } from "./users";

export const handleInitialData = () => {
  return (dispatch) => {
    return Promise.all([_getQuestions(), _getUsers()]).then(
      ([questions, users]) => {
        dispatch(getPolls(questions));
        dispatch(getUsers(users));
      }
    );
  };
};
