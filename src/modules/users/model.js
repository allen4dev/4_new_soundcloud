// Schemas, INITIAL_STATE, types if use flow
import { schema, normalize } from 'normalizr';

export const userSchema = new schema.Entity('users');
export const userListSchema = [userSchema];

export function normalizedUsers(results) {
  return normalize(results, userListSchema);
}

export const INITIAL_STATE = {
  entities: {},
};
