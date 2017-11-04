import * as actionTypes from './actionTypes';
import { normalizedTrack } from './model';

import api from './../../utils/api';

// Action creators
export function setTracks(response) {
  return {
    type: actionTypes.FETCH_TRACKS_SUCCESS,
    response,
  };
}

export function setTrack(response) {
  return {
    type: actionTypes.SET_TRACK,
    response,
  };
}

export function setCurrentTrack(id) {
  return {
    type: actionTypes.SET_CURRENT_TRACK,
    payload: id,
  };
}

// Async actions
export function fetchTrack(id) {
  return async dispatch => {
    const result = await api.tracks.getSingle(id);
    const response = normalizedTrack(result);

    dispatch(setTrack(response));

    return result;
  };
}
