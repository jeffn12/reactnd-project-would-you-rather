import { GET_POLLS } from "../actions/polls";

export const pollsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_POLLS:
      return { ...state, ...action.polls };
    default:
      return state;
  }
};
