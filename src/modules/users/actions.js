import * as actionTypes from './actionTypes';
import { normalizedUser, normalizedUsers } from './model';

import api from './../../utils/api';

// Action creators
export function setUsers(response) {
  return {
    type: actionTypes.FETCH_USERS_SUCCESS,
    response,
  };
}

export function setUser(response) {
  return {
    type: actionTypes.SET_USER,
    response,
  };
}

export function setUserFollowings(id, followings) {
  return {
    type: actionTypes.SET_USER_FOLLOWINGS,
    payload: { id, followings },
  };
}

// Async actions
export function fetchUser(id) {
  return async dispatch => {
    const result = await api.users.getSingle(id);
    const response = normalizedUser(result);

    dispatch(setUser(response));

    return result;
  };
}

export function fetchUserFollowings(id) {
  return async dispatch => {
    const results = await api.users.getFollowings(id);
    const response = normalizedUsers(results.collection);

    dispatch(setUsers(response));
    dispatch(setUserFollowings(id, response.result));

    return response.entities.users;
  };
}
