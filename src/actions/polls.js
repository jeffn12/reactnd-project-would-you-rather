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
