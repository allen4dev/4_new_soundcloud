// Schemas, INITIAL_STATE, types if use flow
import { schema, normalize } from 'normalizr';

export const trackSchema = new schema.Entity('tracks');
export const trackListSchema = [trackSchema];

export function normalizedTracks(results) {
  return normalize(results, trackListSchema);
}

export const INITIAL_STATE = {
  entities: {},
};
