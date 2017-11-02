import * as actionTypes from './../actionTypes';
import * as actions from './../actions';

describe('action creators: query', () => {
  it('should create an action to set the query', () => {
    const query = 'anime';
    const expectedAction = {
      type: actionTypes.SET_QUERY,
      payload: query,
    };

    expect(actions.setQuery(query)).toEqual(expectedAction);
  });
});
