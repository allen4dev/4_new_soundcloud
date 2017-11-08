import * as actionTypes from './actionTypes';
import { normalizedPlaylist } from './model';

import api from './../../utils/api';

import tracks from './../tracks';

// Action creators
export function setPlaylists(response) {
  return {
    type: actionTypes.FETCH_PLAYLISTS_SUCCESS,
    response,
  };
}

// export function setPlaylist(response) {
//   return {
//     type: actionTypes.FETCH_PLAYLIST_SUCCESS,
//     response,
//   }
// }

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
