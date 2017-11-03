import * as actionTypes from './actionTypes';

import tracks from './../tracks';
import playlists from './../playlists';
import users from './../users';

import api from './../../utils/api';

// Action creators
export function setQuery(query) {
  return {
    type: actionTypes.SET_QUERY,
    payload: query,
  };
}

export function setResults(filter, result, nextPage) {
  return {
    type: actionTypes.FETCH_RESOURCE_SUCCESS,
    payload: { filter, result, nextPage },
  };
}

export function requestResource(filter) {
  return {
    type: actionTypes.FETCH_RESOURCE_REQUEST,
    payload: { filter },
  };
}

// Refactor
// Async actions

export function searchTracks(term) {
  return async (dispatch, getState) => {
    const { nextPage } = getState().search.tracks;
    let results;

    dispatch(requestResource('tracks'));

    if (!nextPage) {
      results = await api.tracks.searchByTerm(term);
    } else {
      results = await api.tracks.getNextPage(nextPage);
    }

    const response = tracks.model.normalizedTracks(results.collection);

    dispatch(tracks.actions.setTracks(response));
    dispatch(setResults('tracks', response.result, results.next_href));
    return response.entities.tracks;
  };
}

export function searchPlaylists(term) {
  return async (dispatch, getState) => {
    const { nextPage } = getState().search.playlists;
    let results;

    dispatch(requestResource('playlists'));

    if (!nextPage) {
      results = await api.playlists.searchByTerm(term);
    } else {
      results = await api.playlists.getNextPage(nextPage);
    }

    const response = playlists.model.normalizedPlaylists(results.collection);

    dispatch(playlists.actions.setPlaylists(response));
    dispatch(setResults('playlists', response.result, results.next_href));
    return response.entities.playlists;
  };
}

export function searchUsers(term) {
  return async (dispatch, getState) => {
    const { nextPage } = getState().search.users;
    let results;

    dispatch(requestResource('users'));

    if (!nextPage) {
      results = await api.users.searchByTerm(term);
    } else {
      results = await api.users.getNextPage(nextPage);
    }

    const response = users.model.normalizedUsers(results.collection);

    dispatch(users.actions.setUsers(response));
    dispatch(setResults('users', response.result, results.next_href));
    return response.entities.users;
  };
}
