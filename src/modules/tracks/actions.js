import * as actionTypes from './actionTypes';
import { normalizedTrack } from './model';

import comments from './../comments';

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

export function setTrackComments(id, result, nextPage) {
  return {
    type: actionTypes.SET_TRACK_COMMENTS,
    payload: { id, result, nextPage },
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

export function fetchTrackComments(id) {
  return async dispatch => {
    const results = await api.tracks.getComments(id);
    const response = comments.model.normalizedComments(results.collection);

    dispatch(comments.actions.setComments(response));
    dispatch(setTrackComments(id, response.result, results.next_href));

    return results.collection;
  };
}
