import { _saveQuestionAnswer } from "../utils/api";
import { _getUsers, _getQuestions, _saveQuestion } from "../utils/api";
import { getPolls } from "./polls";
import { getUsers } from "./users";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export const ANSWER_POLL = "ANSWER_POLL";
export const ADD_POLL = "ADD_POLL";
export const CLEAR_ANSWER = "CLEAR_ANSWER";
export const CLEAR_POLL = "CLEAR_POLL";

/**
 *  Action Handlers
 */
// Fetch list of polls and users, put into store
export const handleInitialData = () => {
  return (dispatch) => {
    dispatch(showLoading());
    return Promise.all([_getQuestions(), _getUsers()])
      .then(async ([questions, users]) => [await questions, await users])
      .then(([{ questions }, users]) => {
        dispatch(getPolls(questions));
        dispatch(getUsers(users));
        dispatch(hideLoading());
      });
  };
};

// Optimistically update the poll answer for the current user,
//   if the "server" rejects the answer, it is reset
export const _handleAnswerPoll = (pollId, option, authedUser) => {
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

// Optimistically update the poll answer for the current user,
//   if the "server" rejects the answer, it is reset
export const handleAnswerPoll = (pollId, option, authedUser) => {
  return async (dispatch) => {
    dispatch(answerPoll(pollId, option, authedUser));
    dispatch(showLoading());
    await _saveQuestionAnswer({
      authedUser,
      qid: pollId,
      answer: option
    })
      .then((resps) => console.log(resps))
      .catch((err) => {
        dispatch(clearPollAnswer(pollId, option, authedUser));
        console.log("There was an error saving the poll response: ", err);
        alert("There was an problem answering the poll.  Please try again.");
      });
    dispatch(hideLoading());
  };
};

// Send a new poll to the server, receive the question back (success) or error (fail)
//  Updates optimistically
export const handleAddPoll = (question) => {
  const { author, optionOne, optionTwo, authedUser } = question; // destructure question info
  return async (dispatch) => {
    dispatch(showLoading());
    dispatch(addPoll(question, authedUser)); // optimistically add poll to redux store
    await _saveQuestion({ author, optionOne, optionTwo }).then(
      async (response) => {
        // attempt to save on server
        if (response.status === 500) {
          // if the server returns an error...
          dispatch(clearPoll(question)); // clear the new poll from redux
          console.log(
            // Log error information
            "There was an error: ",
            response.status,
            response.statusText
          );
          alert("There was an error adding the poll.  Please try again."); // tell the user
        } else {
          // server responds 'OK' to request to add poll
          const { questions } = await _getQuestions().then(
            (
              response // pull the questions from the server
            ) => response
          );
          dispatch(clearPoll(question)); // clear the optimistic entry in redux
          dispatch(getPolls(questions)); // refresh redux with the updated question list from server
        }
      }
    );
    dispatch(hideLoading());
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

const addPoll = (question, authedUser) => {
  return {
    type: ADD_POLL,
    question,
    authedUser
  };
};

const clearPoll = (question) => {
  return {
    type: CLEAR_POLL,
    question
  };
};
