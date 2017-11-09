import * as actionTypes from './actionTypes';
import { normalizedUser, normalizedUsers } from './model';

import api from './../../utils/api';

import playlists from './../playlists';
import tracks from './../tracks';

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

export function setCurrentUser(id) {
  return {
    type: actionTypes.SET_CURRENT_USER,
    payload: id,
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

export function requestResource(filter, id) {
  return {
    type: actionTypes.REQUEST_RESOURCE,
    payload: { filter, id },
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
    const results = await api.users.getFollowings(id);

    const response = normalizedUsers(results.collection);

    dispatch(setUsers(response));
    dispatch(setResource(id, 'followings', response.result, results.next_href));

    return response.entities.users;
  };
}

export function fetchUserPlaylists(id) {
  return async (dispatch, getState) => {
    dispatch(requestResource('playlists', id));

    const results = await api.users.getPlaylists(id);
    const response = playlists.model.normalizedPlaylists(results.collection);

    dispatch(playlists.actions.setPlaylists(response));
    dispatch(setResource(id, 'playlists', response.result, results.next_href));

    return response.entities.playlists;
  };
}

export function fetchUserFollowers(id) {
  return async (dispatch, getState) => {
    dispatch(requestResource('followers', id));

    const results = await api.users.getFollowers(id);
    const response = normalizedUsers(results.collection);

    dispatch(setUsers(response));
    dispatch(setResource(id, 'followers', response.result, results.next_href));

    return results.collection;
  };
}

export function fetchUserTracks(id) {
  return async dispatch => {
    dispatch(requestResource('tracks', id));

    const results = await api.users.getTracks(id);
    const response = tracks.model.normalizedTracks(results.collection);

    dispatch(tracks.actions.setTracks(response));
    dispatch(setResource(id, 'tracks', response.result, results.next_href));

    return results.collection;
  };
}

export function fetchUserFavorites(id) {
  return async dispatch => {
    dispatch(requestResource('favorited', id));

    const results = await api.users.getFavoritesTracks(id);
    const response = tracks.model.normalizedTracks(results.collection);

    dispatch(tracks.actions.setTracks(response));
    dispatch(setResource(id, 'favorited', response.result, results.next_href));

    return results.collection;
  };
}

export function fetchNextPlaylists(id) {
  return async (dispatch, getState) => {
    const filter = 'playlists';
    dispatch(requestResource(filter, id));

    const nextPage = getState().users[filter].pagination[id];
    const results = await api.playlists.getNextPage(nextPage);
    const response = playlists.model.normalizedPlaylists(results.collection);

    dispatch(playlists.actions.setPlaylists(response));
    dispatch(setResource(id, filter, response.result, results.next_href));

    return results.collection;
  };
}

export function fetchNextFollowers(id) {
  return async (dispatch, getState) => {
    const filter = 'followers';
    dispatch(requestResource(filter, id));

    const nextPage = getState().users[filter].pagination[id];
    const results = await api.users.getNextPage(nextPage);
    const response = normalizedUsers(results.collection);

    dispatch(setUsers(response));
    dispatch(setResource(id, filter, response.result, results.next_href));

    return results.collection;
  };
}
