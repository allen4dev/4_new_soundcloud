import { combineReducers } from 'redux';

import * as actionTypes from './actionTypes';
import { INITIAL_STATE } from './model';

function entitiesReducer(state = INITIAL_STATE.entities, action = {}) {
  switch (action.type) {
    case actionTypes.FETCH_USERS_SUCCESS:
    case actionTypes.SET_USER:
      return {
        ...state,
        ...action.response.entities.users,
      };

    default:
      return state;
  }
}

function byIdReducer(filter) {
  return (state = INITIAL_STATE[filter].byId, action = {}) => {
    if (!action.payload || action.payload.filter !== filter) {
      return state;
    }

    if (action.type === actionTypes.SET_RESOURCES) {
      return {
        ...state,
        [action.payload.id]: [
          ...(state[action.payload.id] || []),
          ...action.payload.result,
        ],
      };
    }

    return state;
  };
}

function paginationReducer(filter) {
  return (state = INITIAL_STATE[filter].pagination, action = {}) => {
    if (!action.payload || action.payload.filter !== filter) {
      return state;
    }

    if (action.type === actionTypes.SET_RESOURCES) {
      return action.payload.nextPage;
    }

    return state;
  };
}

function createReducer(filter) {
  return combineReducers({
    byId: byIdReducer(filter),
    pagination: paginationReducer(filter),
  });
}

const reducer = combineReducers({
  entities: entitiesReducer,
  followings: createReducer('followings'),
  followers: createReducer('followers'),
  playlists: createReducer('playlists'),
});

export default reducer;
