import * as actionTypes from './../actionTypes';
import * as actions from './../actions';

import fixtures from './../fixtures';

describe('Action creators', () => {
  it('should create an action to set tracks', () => {
    const response = fixtures.getResponse();
    const expectedAction = {
      type: actionTypes.FETCH_TRACKS_SUCCESS,
      response,
    };

    expect(actions.setTracks(response)).toEqual(expectedAction);
  });
});
