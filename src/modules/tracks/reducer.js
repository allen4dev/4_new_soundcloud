import { combineReducers } from 'redux';

import * as actionTypes from './actionTypes';
import { INITIAL_STATE } from './model';

function entitiesReducer(state = INITIAL_STATE.entities, action = {}) {
  switch (action.type) {
    case actionTypes.FETCH_TRACKS_SUCCESS:
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
});

export default reducer;
