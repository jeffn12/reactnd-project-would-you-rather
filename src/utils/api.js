/**
 * API access helper functions
 */
import axios from "axios";
import { USERS_API_URI } from "./vars";
import { QUESTIONS_API_URI } from "./vars";

export function _getUsers() {
  return axios.get(USERS_API_URI).then((response) => response.data);
}

export function _getQuestions() {
  return axios.get(QUESTIONS_API_URI).then((response) => response.data);
}

export async function _saveQuestion(question) {
  return axios
    .post(QUESTIONS_API_URI, {
      ...question
    })
    .then((response) => response);
}

async function _saveQuestionAnswerToQuestion({ authedUser, qid, answer }) {
  return axios
    .put(QUESTIONS_API_URI, {
      id: qid,
      option: answer,
      authedUser
    })
    .then((response) => response);
}

async function _saveQuestionAnswerToUser({ authedUser, qid, answer }) {
  return axios
    .put(USERS_API_URI, {
      questionId: qid,
      option: answer,
      authedUser
    })
    .then((response) => response);
}

export function _saveQuestionAnswer({ authedUser, qid, answer }) {
  return axios
    .all([
      _saveQuestionAnswerToQuestion({ authedUser, qid, answer }),
      _saveQuestionAnswerToUser({ authedUser, qid, answer })
    ])
    .then(
      axios.spread(() => {
        return;
      })
    );
}
