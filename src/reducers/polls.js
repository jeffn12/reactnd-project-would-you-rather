import { GET_POLLS } from "../actions/polls";
import { ANSWER_POLL, ADD_POLL, CLEAR_ANSWER } from "../actions/shared";

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
    case CLEAR_ANSWER:
      return {
        ...state,
        [action.pollId]: {
          ...state[action.pollId],
          [action.option]: {
            ...state[action.pollId][action.option],
            votes: state[action.pollId][action.option].votes.filter(
              (id) => id !== action.authedUser
            )
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
