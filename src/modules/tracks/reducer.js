import { combineReducers } from 'redux';

import * as actionTypes from './actionTypes';
import { INITIAL_STATE } from './model';

function createHistory(state, id) {
  const exists = state.findIndex(trackId => trackId === id);

  if (exists !== -1) {
    return state;
  }

  return [...state, id];
}

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

function currentTrackReducer(
  state = INITIAL_STATE.playing.currentTrack,
  action = {}
) {
  switch (action.type) {
    case actionTypes.SET_CURRENT_TRACK:
      return action.payload;

    case actionTypes.SET_NEXT_TRACK:
    case actionTypes.SET_PREV_TRACK:
      return action.payload;

    default:
      return state;
  }
}

function listReducer(state = INITIAL_STATE.playing.list, action = {}) {
  switch (action.type) {
    case actionTypes.ADD_TO_TRACKLIST:
      return [
        ...state,
        action.payload, // id of the song
      ];

    case actionTypes.REMOVE_FROM_TRACKLIST: // id of the song
      return state.filter(id => id !== action.payload);

    default:
      return state;
  }
}

function historyReducer(state = INITIAL_STATE.history, action = {}) {
  if (action.type === actionTypes.SET_CURRENT_TRACK) {
    return createHistory(state, action.payload);
  }

  return state;
}

function relatedReducer(state = INITIAL_STATE.related, action = {}) {
  if (action.type === actionTypes.SET_RELATED_TRACKS) {
    return {
      ...state,
      [action.payload.id]: action.payload.result,
    };
  }

  return state;
}

const commentsReducer = combineReducers({
  byId: byIdReducer,
  pagination: paginationReducer,
});

const playingReducer = combineReducers({
  currentTrack: currentTrackReducer,
  list: listReducer,
});

const reducer = combineReducers({
  entities: entitiesReducer,
  playing: playingReducer,
  comments: commentsReducer,
  currentTrack: currentTrackReducer,
  popular: popularReducer,
  history: historyReducer,
  related: relatedReducer,
});

export default reducer;
