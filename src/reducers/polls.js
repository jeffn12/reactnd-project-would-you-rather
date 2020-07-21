import { GET_POLLS, ANSWER_POLL } from "../actions/polls";

export const pollsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_POLLS:
      return { ...state, ...action.polls };
    case ANSWER_POLL:
      return {
        ...state,
        [action.authedUser]: {
          ...state.users[action.authedUser.id],
          answers: {
            [action.pollId]: action.option
          }
        }
      };
    default:
      return state;
  }
};
