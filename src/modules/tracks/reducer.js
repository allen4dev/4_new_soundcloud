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

const reducer = combineReducers({
  entities: entitiesReducer,
  currentTrack: () => null,
});

export default reducer;
