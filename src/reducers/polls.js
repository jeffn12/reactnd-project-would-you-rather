import { GET_POLLS } from "../actions/polls";
import { ANSWER_POLL } from "../actions/shared";

export const pollsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_POLLS:
      return { ...state, ...action.polls };
    case ANSWER_POLL:
      return {
        ...state,
        [action.pollId]: {
          ...state[action.pollId],
          optionOne: state[action.pollId][action.option].votes.concat([
            action.authedUser
          ])
        }
      };
    default:
      return state;
  }
};
