import { GET_USERS } from "../actions/users";
import { ANSWER_POLL, ADD_POLL } from "../actions/shared";

export const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, ...action.users };
    case ANSWER_POLL:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.pollId]: action.option
          }
        }
      };
    case ADD_POLL:
      return {
        ...state,
        [action.question.author]: {
          questions: [...[action.question.author].questions, action.question.id]
        }
      };
    default:
      return state;
  }
};
