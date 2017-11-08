import * as actionTypes from './actionTypes';

// action creators
export function setComments(response) {
  return {
    type: actionTypes.FETCH_COMMENTS_SUCCESS,
    response,
  };
}

// async actions
