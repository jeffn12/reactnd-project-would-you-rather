/**
 * API access helper functions
 */

import { USERS_API_URI } from "./vars";

export function _getUsers() {
  return fetch(USERS_API_URI);
}
