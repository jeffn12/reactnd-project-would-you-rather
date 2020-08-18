import { GET_POLLS } from "../actions/polls";
import {
  ANSWER_POLL,
  ADD_POLL,
  CLEAR_ANSWER,
  CLEAR_POLL
} from "../actions/shared";

/**
 * pollsReducer functions:
 *  get polls - get all of the polls
 *  answer poll - take a poll id and an answer, add it to the answer's votes array
 *  clear poll - if the "server" rejects the poll answer, reset it [for optimistic updating]
 *  add poll - add a new poll to the list
 *
 */
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
      const { question } = action;
      return {
        ...state,
        temp: {
          optionOne: { text: question.optionOne, votes: [] },
          optionTwo: { text: question.optionTwo, votes: [] },
          timestamp: Date.now(),
          author: action.authedUser
        }
      };
    case CLEAR_POLL:
      let newState = state;
      delete newState["temp"];
      return {
        ...newState
      };
    default:
      return state;
  }
};
