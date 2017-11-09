// Schemas, INITIAL_STATE, types if use flow
import { schema, normalize } from 'normalizr';

export const userSchema = new schema.Entity('users');
export const userListSchema = [userSchema];

export function normalizedUser(user) {
  return normalize(user, userSchema);
}

export function normalizedUsers(results) {
  return normalize(results, userListSchema);
}

export const INITIAL_STATE = {
  currentUser: '198559542', // null by default
  entities: {},
  playlists: {
    byId: {},
    pagination: {},
    fetching: {},
  },
  followings: {
    byId: {},
    pagination: {},
    fetching: {},
  },
  followers: {
    byId: {},
    pagination: {},
    fetching: {},
  },
  tracks: {
    byId: {},
    pagination: {},
    fetching: {},
  },
  favorited: {
    byId: {},
    pagination: {},
    fetching: {},
  },
};
