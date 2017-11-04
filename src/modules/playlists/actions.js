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

export function setPlaylistTracks(id, trackIds, nextPage) {
  return {
    type: actionTypes.SET_PLAYLIST_TRACKS,
    payload: { id, trackIds, nextPage },
  };
}

// Async actions
export function fetchPlaylistTracks(id) {
  return async (dispatch, getState) => {
    let results;
    const nextPage = getState().playlists.tracks.pagination[id];

    if (nextPage) {
      results = await api.playlists.getNextPage(nextPage);
    } else {
      results = await api.playlists.getTracks(id);
    }

    const response = tracks.model.normalizedTracks(results.collection);

    dispatch(tracks.actions.setTracks(response));
    dispatch(setPlaylistTracks(id, response.result, results.next_href));

    return response.entities.tracks;
  };
}
