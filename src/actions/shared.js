import {
  _getQuestions,
  _getUsers,
  _saveQuestionAnswer,
  _saveQuestion
} from "../utils/_DATA";
import { getPolls } from "./polls";
import { getUsers } from "./users";

export const ANSWER_POLL = "ANSWER_POLL";
export const ADD_POLL = "ADD_POLL";
export const CLEAR_ANSWER = "CLEAR_ANSWER";

// Action Handlers
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

export const handleAnswerPoll = (pollId, option, authedUser) => {
  return (dispatch) => {
    dispatch(answerPoll(pollId, option, authedUser));
    _saveQuestionAnswer({ authedUser, qid: pollId, answer: option }).catch(
      (err) => {
        dispatch(clearPollAnswer(pollId, option, authedUser));
        console.log("There was an error saving the poll response: ", err);
        alert("There was an problem answering the poll.  Please try again.");
      }
    );
  };
};

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

const clearPollAnswer = (pollId, option, authedUser) => {
  return {
    type: CLEAR_ANSWER,
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
