import { GET_POLLS } from "../actions/polls";
import { ANSWER_POLL, ADD_POLL } from "../actions/shared";

export const pollsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_POLLS:
      return { ...state, ...action.polls };
    case ANSWER_POLL:
      return {
        ...state,
        [action.pollId]: {
          ...state[action.pollId],
          [action.option]: {
            ...state[action.pollId][action.option],
            votes: state[action.pollId][action.option].votes.concat([
              action.authedUser
            ])
          }
        }
      };
    case ADD_POLL:
      return {
        ...state,
        [action.question.id]: action.question
      };
    default:
      return state;
  }
};
