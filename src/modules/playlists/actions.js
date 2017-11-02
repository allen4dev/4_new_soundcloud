import * as actionTypes from './actionTypes';

// Action creators
export function setPlaylists(response) {
  return {
    type: actionTypes.FETCH_PLAYLISTS_SUCCESS,
    response,
  };
}

// Async actions
