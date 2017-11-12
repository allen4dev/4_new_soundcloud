import { combineReducers } from 'redux';

import * as actionTypes from './actionTypes';
import { INITIAL_STATE } from './model';

function entitiesReducer(state = INITIAL_STATE.entities, action = {}) {
  switch (action.type) {
    case actionTypes.FETCH_PLAYLISTS_SUCCESS:
      return {
        ...state,
        ...action.response.entities.playlists,
      };

    default:
      return state;
  }
}

function byIdReducer(state = INITIAL_STATE.tracks.byId, action = {}) {
  if (action.type === actionTypes.SET_PLAYLIST_TRACKS) {
    return {
      ...state,
      [action.payload.id]: [
        ...(state[action.payload.id] || []),
        ...action.payload.trackIds,
      ],
    };
  }

  return state;
}

function paginationReducer(
  state = INITIAL_STATE.tracks.pagination,
  action = {}
) {
  if (action.type === actionTypes.SET_PLAYLIST_TRACKS) {
    return {
      ...state,
      [action.payload.id]: action.payload.nextPage,
    };
  }

  return state;
}

function fetchingReducer(state = INITIAL_STATE.tracks.fetching, action = {}) {
  switch (action.type) {
    case actionTypes.REQUEST_PLAYLIST_TRACKS:
      return {
        ...state,
        [action.payload]: true,
      };

    case actionTypes.SET_PLAYLIST_TRACKS:
      return {
        ...state,
        [action.payload.id]: false,
      };

    default:
      return state;
  }
}

function relatedReducer(state = INITIAL_STATE.related, action = {}) {
  if (action.type === actionTypes.SET_RELATED_PLAYLISTS) {
    return {
      ...state,
      [action.payload.id]: action.payload.result,
    };
  }

  return state;
}

const tracksReducer = combineReducers({
  byId: byIdReducer,
  pagination: paginationReducer,
  fetching: fetchingReducer,
});

const reducer = combineReducers({
  entities: entitiesReducer,
  tracks: tracksReducer,
  related: relatedReducer,
});

export default reducer;
