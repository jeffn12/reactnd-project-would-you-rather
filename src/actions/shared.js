import { _getQuestions } from "../utils/_DATA";
import { getPolls } from "./polls";

export const handleInitialData = () => {
  return (dispatch) => {
    return _getQuestions().then((questions) => {
      dispatch(getPolls(questions));
    });
  };
};
