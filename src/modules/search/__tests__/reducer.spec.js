import * as actions from './../actions';
import { INITIAL_STATE } from './../model';
import reducer from './../reducer';

test('@INIT', () => {
  expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
});

describe('query', () => {
  it('should handle SET_QUERY action', () => {
    const query = 'anime';
    const nextState = reducer(INITIAL_STATE, actions.setQuery(query));

    expect(nextState).toEqual({
      ...INITIAL_STATE,
      query,
    });

    const newQuery = 'games';
    const newState = reducer(nextState, actions.setQuery(newQuery));

    expect(newState).toEqual({
      ...nextState,
      query: newQuery,
    });
  });
});
