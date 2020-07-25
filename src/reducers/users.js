import { GET_USERS, ADD_USER } from "../actions/users";
import { ANSWER_POLL, ADD_POLL, CLEAR_ANSWER } from "../actions/shared";

export const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, ...action.users };
    case ADD_USER:
      if (!state[action.user.id]) {
        return { ...state, [action.user.id]: action.user };
      } else {
        return { ...state };
      }
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
    case CLEAR_ANSWER:
      const newAnswers = Object.assign({}, state[action.authedUser].answers);
      delete newAnswers[action.pollId];
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: newAnswers
        }
      };
    case ADD_POLL:
      return {
        ...state,
        [action.question.author]: {
          ...state[action.question.author],
          questions: state[action.question.author].questions.concat([
            action.question.id
          ])
        }
      };
    default:
      return state;
  }
};
