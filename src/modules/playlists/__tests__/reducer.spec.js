import * as actions from './../actions';
import { INITIAL_STATE } from './../model';
import reducer from './../reducer';

import fixtures from './../fixtures';

test('@@INIT', () => {
  expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
});

describe('entities', () => {
  it('should handle FETCH_PLAYLISTS_SUCCESS action', () => {
    const response = fixtures.getResponse(2);
    const nextState = reducer(INITIAL_STATE, actions.setPlaylists(response));

    expect(nextState).toEqual({
      ...INITIAL_STATE,
      entities: response.entities.playlists,
    });

    const newResponse = fixtures.getResponse(1);
    const newState = reducer(nextState, actions.setPlaylists(newResponse));

    expect(newState).toEqual({
      ...nextState,
      entities: {
        ...nextState.entities,
        ...newResponse.entities.playlists,
      },
    });
  });
});
