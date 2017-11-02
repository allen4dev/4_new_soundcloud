import { combineReducers } from 'redux';

import * as actionTypes from './actionTypes';
import { INITIAL_STATE } from './model';

function queryReducer(state = INITIAL_STATE.query, action = {}) {
  if (action.type === actionTypes.SET_QUERY) {
    return action.payload;
  }

  return state;
}

const reducer = combineReducers({
  query: queryReducer,
});

export default reducer;
