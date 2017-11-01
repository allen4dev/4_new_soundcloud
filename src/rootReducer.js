import { combineReducers } from 'redux';

import tracks from './modules/tracks';
import playlists from './modules/playlists';
import users from './modules/users';

const rootReducer = combineReducers({
  [tracks.constants.NAME]: tracks.reducer,
  [playlists.constants.NAME]: playlists.reducer,
  [users.constants.NAME]: users.reducer,
});

export default rootReducer;
