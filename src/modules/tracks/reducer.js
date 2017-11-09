import { combineReducers } from 'redux';

import * as actionTypes from './actionTypes';
import { INITIAL_STATE } from './model';

function entitiesReducer(state = INITIAL_STATE.entities, action = {}) {
  switch (action.type) {
    // Refactor: can use the same FETCH_TRACKS_SUCCESS
    case actionTypes.FETCH_TRACKS_SUCCESS:
    case actionTypes.SET_TRACK:
      return {
        ...state,
        ...action.response.entities.tracks,
      };

    default:
      return state;
  }
}

function popularReducer(state = INITIAL_STATE.popular, action = {}) {
  if (action.type === actionTypes.SET_POPULAR_TRACKS) {
    return action.payload;
  }

  return state;
}

function currentTrackReducer(state = INITIAL_STATE.currentTrack, action = {}) {
  if (action.type === actionTypes.SET_CURRENT_TRACK) {
    return action.payload;
  }

  return state;
}

function byIdReducer(state = INITIAL_STATE.comments.byId, action = {}) {
  switch (action.type) {
    case actionTypes.SET_TRACK_COMMENTS:
      return {
        ...state,
        [action.payload.id]: [
          ...(state[action.payload.id] || []),
          ...action.payload.result,
        ],
      };

    default:
      return state;
  }
}

function paginationReducer(
  state = INITIAL_STATE.comments.pagination,
  action = {}
) {
  if (action.type === actionTypes.SET_TRACK_COMMENTS) {
    return {
      ...state,
      [action.payload.id]: action.payload.nextPage,
    };
  }

  return state;
}

const commentsReducer = combineReducers({
  byId: byIdReducer,
  pagination: paginationReducer,
});

const reducer = combineReducers({
  entities: entitiesReducer,
  comments: commentsReducer,
  currentTrack: currentTrackReducer,
  popular: popularReducer,
});

export default reducer;
