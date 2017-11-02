import * as actionTypes from './../actionTypes';
import * as actions from './../actions';

import fixtures from './../fixtures';

describe('action creators', () => {
  it('should create an action to set users', () => {
    const response = fixtures.getResponse(2);
    const expectedAction = {
      type: actionTypes.FETCH_USERS_SUCCESS,
      response,
    };

    expect(actions.setUsers(response)).toEqual(expectedAction);
  });
});
