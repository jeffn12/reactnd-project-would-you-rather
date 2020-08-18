/**
 * API access helper functions
 */

import { USERS_API_URI } from "./vars";
import { QUESTIONS_API_URI } from "./vars";

export function _getUsers() {
  return fetch(USERS_API_URI);
}

export function _getQuestions() {
  return fetch(QUESTIONS_API_URI);
}

export async function _saveQuestion(question) {
  return fetch(QUESTIONS_API_URI, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    referrerPolicy: "no-referrer",
    body: JSON.stringify(question)
  })
    .then((response) => response)
    .catch((err) => err);
}
