import * as actionTypes from './actionTypes';

// Action creators
export function setQuery(query) {
  return {
    type: actionTypes.SET_QUERY,
    payload: query,
  };
}

// Async actions
