import { _getQuestions, _getUsers, _saveQuestionAnswer } from "../utils/_DATA";
import { getPolls } from "./polls";
import { getUsers } from "./users";
import { setAuthedUser } from "./authedUser";

export const ANSWER_POLL = "ANSWER_POLL";

export const handleInitialData = () => {
  return (dispatch) => {
    return Promise.all([_getQuestions(), _getUsers()]).then(
      ([questions, users]) => {
        dispatch(getPolls(questions));
        dispatch(getUsers(users));
        dispatch(setAuthedUser("jeffn12")); //hardcoded for development - remove this line when ready to test
      }
    );
  };
};

export const answerPoll = (pollId, option, authedUser) => {
  return {
    type: ANSWER_POLL,
    pollId,
    option,
    authedUser
  };
};

export const handleAnswerPoll = (pollId, option, authedUser) => {
  return (dispatch) => {
    dispatch(answerPoll(pollId, option, authedUser));

    _saveQuestionAnswer(pollId, option, authedUser.id).catch((err) => {
      console.log("there was an error");
    });
  };
};
