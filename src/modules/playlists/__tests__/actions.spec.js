import * as actionTypes from './../actionTypes';
import * as actions from './../actions';
import { INITIAL_STATE } from './../model';
import reducer from './../reducer';

import fixtures from './../fixtures';

test('@@INIT', () => {
  expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
});

describe('action creators', () => {
  it('should create an action to set playlists', () => {
    const response = fixtures.getResponse(2);
    const expectedAction = {
      type: actionTypes.FETCH_PLAYLISTS_SUCCESS,
      response,
    };

    expect(actions.setPlaylists(response)).toEqual(expectedAction);
  });
});
