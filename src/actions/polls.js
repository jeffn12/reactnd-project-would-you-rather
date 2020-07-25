export const GET_POLLS = "GET_POLLS";

/**
 * getPolls actions:
 *  get polls - send an object with the polls
 *
 */
export const getPolls = (polls) => {
  return {
    type: GET_POLLS,
    polls
  };
};
