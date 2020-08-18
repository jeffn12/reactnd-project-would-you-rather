import { GET_USERS, ADD_USER } from "../actions/users";
import { ANSWER_POLL, ADD_POLL, CLEAR_ANSWER } from "../actions/shared";

/**
 * usersReducer functions:
 *  get users - get all of the users
 *  answer poll - add the id/answer of the poll to the user's answers object
 *  clear answer - if the "server" rejects answering the poll, reset answers object
 *  add poll - add the poll id to the user's questions array
 *
 */
export const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, ...action.users };
    case ADD_USER:
      console.log("reducing...", action.user);
      if (!state[action.user.id]) {
        return { ...state, [action.user.username]: action.user };
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
