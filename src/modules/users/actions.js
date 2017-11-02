import * as actionTypes from './actionTypes';

// Action creators
export function setUsers(response) {
  return {
    type: actionTypes.FETCH_USERS_SUCCESS,
    response,
  };
}
// Async actions
