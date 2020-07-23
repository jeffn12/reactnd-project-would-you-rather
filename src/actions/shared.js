import {
  _getQuestions,
  _getUsers,
  _saveQuestionAnswer,
  _saveQuestion
} from "../utils/_DATA";
import { getPolls } from "./polls";
import { getUsers } from "./users";
import { setAuthedUser } from "./authedUser";

export const ANSWER_POLL = "ANSWER_POLL";
export const ADD_POLL = "ADD_POLL";

// Action Handlers
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

export const handleAnswerPoll = (pollId, option, authedUser) => {
  return (dispatch) => {
    dispatch(answerPoll(pollId, option, authedUser));
    _saveQuestionAnswer({ authedUser, qid: pollId, answer: option }).catch(
      (err) => {
        console.log("there was an error");
      }
    );
  };
};

// question = { author, optionOneText, optionTwoText }
export const handleAddPoll = (author, optionOneText, optionTwoText) => {
  return (dispatch) => {
    _saveQuestion({ author, optionOneText, optionTwoText })
      .then((question) => {
        dispatch(addPoll(question));
      })
      .catch((err) => console.log("there was an error"));
  };
};

// Action Creators
const answerPoll = (pollId, option, authedUser) => {
  return {
    type: ANSWER_POLL,
    pollId,
    option,
    authedUser
  };
};

const addPoll = (question) => {
  return {
    type: ADD_POLL,
    question
  };
};
