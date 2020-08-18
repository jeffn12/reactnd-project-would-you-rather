import {
  _getQuestions,
  _saveQuestionAnswer,
  _saveQuestion
} from "../utils/_DATA";
import { _getUsers } from "../utils/api";
import { getPolls } from "./polls";
import { getUsers } from "./users";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export const ANSWER_POLL = "ANSWER_POLL";
export const ADD_POLL = "ADD_POLL";
export const CLEAR_ANSWER = "CLEAR_ANSWER";

/**
 *  Action Handlers
 */
// Fetch list of polls and users, put into store
export const handleInitialData = () => {
  return (dispatch) => {
    dispatch(showLoading());
    return Promise.all([_getQuestions(), _getUsers()])
      .then(async ([questions, users]) => [questions, await users.json()])
      .then(([questions, users]) => {
        dispatch(getPolls(questions));
        dispatch(getUsers(users));
        dispatch(hideLoading());
      });
  };
};

// Optimistically update the poll answer for the current user,
//   if the "server" rejects the answer, it is reset
export const handleAnswerPoll = (pollId, option, authedUser) => {
  return (dispatch) => {
    dispatch(answerPoll(pollId, option, authedUser));
    dispatch(showLoading());
    _saveQuestionAnswer({ authedUser, qid: pollId, answer: option }).catch(
      (err) => {
        dispatch(clearPollAnswer(pollId, option, authedUser));
        console.log("There was an error saving the poll response: ", err);
        alert("There was an problem answering the poll.  Please try again.");
      }
    );
    dispatch(hideLoading());
  };
};

// Add a poll to the database.  The API returns a formatted question
export const handleAddPoll = (author, optionOneText, optionTwoText) => {
  return (dispatch) => {
    dispatch(showLoading());
    _saveQuestion({ author, optionOneText, optionTwoText })
      .then((question) => {
        dispatch(addPoll(question));
        dispatch(hideLoading());
      })
      .catch((err) => {
        dispatch(hideLoading());
        console.log("There was an error: ", err);
        alert("There was an error adding the poll.  Please try again.");
      });
  };
};

/**
 *  Action Creators
 */
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
