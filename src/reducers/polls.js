import { GET_POLLS, ANSWER_POLL } from "../actions/polls";

export const pollsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_POLLS:
      return { ...state, ...action.polls };
    case ANSWER_POLL:
      console.log(action);

      return {
        ...state,
        users: {
          ...state.users,
          [action.authedUser.id]: {
            ...[action.authedUser.id],
            answers: {
              [action.pollId]: action.option
            }
          }
        },
        ...state.authedUser,
        ...state.polls
      };
    default:
      return state;
  }
};
