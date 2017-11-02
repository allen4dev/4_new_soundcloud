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

const reducer = combineReducers({
  entities: entitiesReducer,
});

export default reducer;
