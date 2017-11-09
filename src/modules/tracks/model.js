// Schemas, INITIAL_STATE, types if use flow
import { schema, normalize } from 'normalizr';

export const trackSchema = new schema.Entity('tracks');
export const trackListSchema = [trackSchema];

export function normalizedTracks(results) {
  return normalize(results, trackListSchema);
}

export function normalizedTrack(track) {
  return normalize(track, trackSchema);
}

export const INITIAL_STATE = {
  entities: {},
  comments: {
    byId: {},
    pagination: {},
  },
  popular: [],
  playing: {
    currentTrack: null,
    list: [],
  },
};
