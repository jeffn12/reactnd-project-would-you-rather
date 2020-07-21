import { _saveQuestionAnswer } from "../utils/_DATA";

export const GET_POLLS = "GET_POLLS";
export const ANSWER_POLL = "ANSWER_POLL";

export const getPolls = (polls) => {
  return {
    type: GET_POLLS,
    polls
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
