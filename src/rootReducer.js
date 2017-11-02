import { combineReducers } from 'redux';

import tracks from './modules/tracks';
import playlists from './modules/playlists';
import users from './modules/users';
import search from './modules/search';

const rootReducer = combineReducers({
  [tracks.constants.NAME]: tracks.reducer,
  [playlists.constants.NAME]: playlists.reducer,
  [users.constants.NAME]: users.reducer,
  [search.constants.NAME]: search.reducer,
});

export default rootReducer;
