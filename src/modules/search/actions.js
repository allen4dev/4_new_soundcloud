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

export function setFilter(filter) {
  return {
    type: actionTypes.SET_FILTER,
    payload: filter,
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

export function setResultsNextPage(filter, result, nextPage) {
  return {
    type: actionTypes.SET_RESULTS_NEXT_PAGE,
    payload: { filter, result, nextPage },
  };
}

// Refactor
// Async actions
export function searchTracks(term) {
  return async (dispatch, getState) => {
    const results = await api.tracks.searchByTerm(term);

    dispatch(requestResource('tracks'));

    const response = tracks.model.normalizedTracks(results.collection);

    dispatch(tracks.actions.setTracks(response));
    dispatch(setResults('tracks', response.result, results.next_href));
    return response.entities.tracks;
  };
}

export function searchPlaylists(term) {
  return async (dispatch, getState) => {
    const results = await api.playlists.searchByTerm(term, 24);

    dispatch(requestResource('playlists'));

    const response = playlists.model.normalizedPlaylists(results.collection);

    dispatch(playlists.actions.setPlaylists(response));
    dispatch(setResults('playlists', response.result, results.next_href));
    return response.entities.playlists;
  };
}

export function searchUsers(term) {
  return async (dispatch, getState) => {
    const results = await api.users.searchByTerm(term, 24);

    dispatch(requestResource('users'));

    const response = users.model.normalizedUsers(results.collection);

    dispatch(users.actions.setUsers(response));
    dispatch(setResults('users', response.result, results.next_href));
    return response.entities.users;
  };
}

// Refactor
export function searchTracksNextPage() {
  return async (dispatch, getState) => {
    dispatch(requestResource('tracks'));

    const nextPage = getState().search.tracks.nextPage;
    const results = await api.tracks.getNextPage(nextPage);
    const response = tracks.model.normalizedTracks(results.collection);

    dispatch(tracks.actions.setTracks(response));
    dispatch(setResultsNextPage('tracks', response.result, results.next_href));

    return results.collection;
  };
}

export function searchPlaylistsNextPage() {
  return async (dispatch, getState) => {
    dispatch(requestResource('playlists'));

    const nextPage = getState().search.playlists.nextPage;
    const results = await api.playlists.getNextPage(nextPage);
    const response = playlists.model.normalizedPlaylists(results.collection);

    dispatch(playlists.actions.setPlaylists(response));
    dispatch(
      setResultsNextPage('playlists', response.result, results.next_href),
    );

    return results.collection;
  };
}

export function searchUsersNextPage() {
  return async (dispatch, getState) => {
    dispatch(requestResource('users'));

    const nextPage = getState().search.users.nextPage;
    const results = await api.users.getNextPage(nextPage);
    const response = users.model.normalizedUsers(results.collection);

    dispatch(users.actions.setUsers(response));
    dispatch(setResultsNextPage('users', response.result, results.next_href));

    return results.collection;
  };
}
