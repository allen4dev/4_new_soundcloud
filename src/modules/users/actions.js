import * as actionTypes from './actionTypes';
import { normalizedUser, normalizedUsers } from './model';

import api from './../../utils/api';

import playlists from './../playlists';

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

export function setResource(id, filter, result, nextPage) {
  return {
    type: actionTypes.SET_RESOURCES,
    payload: { id, filter, result, nextPage },
  };
}

export function setResourceNextPage(filter, nextPage) {
  return {
    type: actionTypes.SET_RESOURCES_NEXT_PAGE,
    payload: { filter, nextPage },
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
  return async (dispatch, getState) => {
    // Refactor
    let results;
    const nextPage = getState().followings.pagination[id];

    if (nextPage) {
      results = await api.users.getNextPage(nextPage);
    } else {
      results = await api.users.getFollowings(id);
    }

    const response = normalizedUsers(results.collection);

    dispatch(setUsers(response));
    dispatch(setResource(id, 'followings', response.result, results.next_href));

    return response.entities.users;
  };
}

export function fetchUserPlaylists(id) {
  return async (dispatch, getState) => {
    let results;
    const nextPage = getState().playlists.pagination[id];

    if (nextPage) {
      results = await api.users.getNextPage(nextPage);
    } else {
      results = await api.users.getPlaylists(id);
    }

    const response = playlists.model.normalizedPlaylists(results.collection);
    dispatch(playlists.actions.setPlaylists(response));
    dispatch(setResource(id, 'playlists', response.result, results.next_href));

    return response.entities.playlists;
  };
}

export function fetchUserFollowers(id) {
  return async (dispatch, getState) => {
    let results;
    const nextPage = getState().followers.pagination[id];

    if (nextPage) {
      results = await api.users.getNextPage(nextPage);
    } else {
      results = await api.users.getFollowers(id);
    }

    const response = normalizedUsers(results.collection);

    dispatch(setUsers(response));
    dispatch(setResource(id, 'followers', response.result, results.next_href));

    return response.entities.users;
  };
}
