import { schema, normalize } from 'normalizr';

export const commentSchema = new schema.Entity('comments');
export const commentListSchema = [commentSchema];

export const INITIAL_STATE = {
  entities: {},
};

export function normalizedComments(results) {
  return normalize(results, commentListSchema);
}

export function normalizedComment(comment) {
  return normalize(comment, commentSchema);
}
