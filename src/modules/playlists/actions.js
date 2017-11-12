import * as actionTypes from './actionTypes';
import { normalizedPlaylist, normalizedPlaylists } from './model';

import api from './../../utils/api';

import tracks from './../tracks';

// Action creators
export function setPlaylists(response) {
  return {
    type: actionTypes.FETCH_PLAYLISTS_SUCCESS,
    response,
  };
}

export function setRelatedPlaylists(id, result) {
  return {
    type: actionTypes.SET_RELATED_PLAYLISTS,
    payload: { id, result },
  };
}

export function setPlaylistTracks(id, trackIds, nextPage) {
  return {
    type: actionTypes.SET_PLAYLIST_TRACKS,
    payload: { id, trackIds, nextPage },
  };
}

export function requestPlaylistTracks(id) {
  return {
    type: actionTypes.REQUEST_PLAYLIST_TRACKS,
    payload: id,
  };
}

// Async actions
export function fetchPlaylist(id) {
  return async dispatch => {
    const result = await api.playlists.getSingle(id);
    const response = normalizedPlaylist(result);

    dispatch(setPlaylists(response));

    return result;
  };
}

export function fetchPlaylistTracks(id) {
  return async dispatch => {
    dispatch(requestPlaylistTracks(id));

    const results = await api.playlists.getTracks(id);
    const response = tracks.model.normalizedTracks(results.collection);

    dispatch(tracks.actions.setTracks(response));
    dispatch(setPlaylistTracks(id, response.result, results.next_href));

    return response.entities.tracks;
  };
}

export function fetchPlaylistTracksNextPage(id) {
  return async (dispatch, getState) => {
    dispatch(requestPlaylistTracks(id));

    const nextPage = getState().playlists.tracks.pagination[id];
    const results = await api.playlists.getNextPage(nextPage);
    const response = tracks.model.normalizedTracks(results.collection);

    dispatch(tracks.actions.setTracks(response));
    dispatch(setPlaylistTracks(id, response.result, results.next_href));

    return results.collection;
  };
}

export function fetchRelatedPlaylists(id, term) {
  return async dispatch => {
    const results = await api.playlists.searchByTerm(term, 10);
    const response = normalizedPlaylists(results.collection);

    dispatch(setPlaylists(response));
    dispatch(setRelatedPlaylists(id, response.result));

    return results.collection;
  };
}
