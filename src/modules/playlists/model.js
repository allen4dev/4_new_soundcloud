// Schemas, INITIAL_STATE, types if use flow
import { schema, normalize } from 'normalizr';

export const playlistSchema = new schema.Entity('playlists');
export const playlistListSchema = [playlistSchema];

export function normalizedPlaylists(results) {
  return normalize(results, playlistListSchema);
}

export function normalizedPlaylist(playlist) {
  return normalize(playlist, playlistSchema);
}

export const INITIAL_STATE = {
  entities: {},
  tracks: {
    byId: {},
    pagination: {},
    fetching: {},
  },
  // ToDo
  // currentList: [],
};
