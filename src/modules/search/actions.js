import * as actionTypes from './actionTypes';

// Action creators
export function setQuery(query) {
  return {
    type: actionTypes.SET_QUERY,
    payload: query,
  };
}

export function setResults(filter, result, nextPage) {
  return {
    type: actionTypes.FETCH_RESOURCE_SUCCESS,
    payload: { filter, result, nextPage },
  };
}

// Async actions
