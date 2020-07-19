export const GET_POLLS = "GET_POLLS";

export const getPolls = (polls) => {
  return {
    type: GET_POLLS,
    polls
  };
};
