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
const reducer = combineReducers({
  entities: entitiesReducer,
});

export default reducer;
