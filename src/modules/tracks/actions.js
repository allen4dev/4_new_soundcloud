import * as actionTypes from './actionTypes';
import { normalizedTrack, normalizedTracks } from './model';

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

export function setTrackComments(id, result, nextPage) {
  return {
    type: actionTypes.SET_TRACK_COMMENTS,
    payload: { id, result, nextPage },
  };
}

export function setCurrentTrack(id) {
  return {
    type: actionTypes.SET_CURRENT_TRACK,
    payload: id,
  };
}

export function addToTracklist(id) {
  return {
    type: actionTypes.ADD_TO_TRACKLIST,
    payload: id,
  };
}

export function removeFromTracklist(id) {
  return {
    type: actionTypes.REMOVE_FROM_TRACKLIST,
    payload: id,
  };
}

export function setPopularTracks(result) {
  return {
    type: actionTypes.SET_POPULAR_TRACKS,
    payload: result,
  };
}

export function setRelatedTracks(id, result) {
  return {
    type: actionTypes.SET_RELATED_TRACKS,
    payload: { id, result },
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

export function fetchPopularTracks() {
  return async dispatch => {
    const results = await api.tracks.searchByTerm('openings');
    const response = normalizedTracks(results.collection);

    dispatch(setTracks(response));
    dispatch(setPopularTracks(response.result));

    return results.collection;
  };
}

export function fetchRelatedTracks(id, term) {
  return async dispatch => {
    const results = await api.tracks.searchByTerm(term, 15);
    const response = normalizedTracks(results.collection);

    dispatch(setTracks(response));
    dispatch(setRelatedTracks(id, response.result));

    return results.collection;
  };
}
