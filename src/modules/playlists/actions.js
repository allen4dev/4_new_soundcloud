import * as actionTypes from './actionTypes';

import api from './../../utils/api';

import tracks from './../tracks';

// Action creators
export function setPlaylists(response) {
  return {
    type: actionTypes.FETCH_PLAYLISTS_SUCCESS,
    response,
  };
}

export function setPlaylistTracks(id, trackIds) {
  return {
    type: actionTypes.SET_PLAYLIST_TRACKS,
    payload: { id, trackIds },
  };
}

// Async actions
export function fetchPlaylistTracks(id) {
  return async dispatch => {
    const results = await api.playlists.getTracks(id);
    const response = tracks.model.normalizedTracks(results.collection);

    dispatch(tracks.actions.setTracks(response));
    dispatch(setPlaylistTracks(id, response.result));

    return response.entities.tracks;
  };
}
