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

function byIdReducer(state = INITIAL_STATE.followings.byId, action = {}) {
  if (action.type === actionTypes.SET_USER_FOLLOWINGS) {
    return {
      ...state,
      [action.payload.id]: [
        ...(state[action.payload.id] || []),
        ...action.payload.followings,
      ],
    };
  }

  return state;
}

const followingsReducer = combineReducers({
  byId: byIdReducer,
  pagination: () => ({}),
});

const reducer = combineReducers({
  entities: entitiesReducer,
  followings: followingsReducer,
});

export default reducer;
