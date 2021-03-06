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

describe('tracks', () => {
  it('should handle SET_PLAYLIST_TRACKS', () => {
    const { id } = fixtures.getPlaylist();
    const trackIds = fixtures.getTracks(3);
    const nextPage = `https://example.test/playlists/${id}/tracks/page-1`;
    const nextState = reducer(
      INITIAL_STATE,
      actions.setPlaylistTracks(id, trackIds, nextPage),
    );

    expect(nextState).toEqual({
      ...INITIAL_STATE,
      tracks: {
        ...INITIAL_STATE.tracks,
        byId: { [id]: trackIds },
        pagination: {
          [id]: nextPage,
        },
      },
    });

    const newTracks = fixtures.getTracks(2);
    const newPage = `https://example.test/playlists/${id}/tracks/page-2`;
    const newState = reducer(
      nextState,
      actions.setPlaylistTracks(id, newTracks, newPage),
    );

    expect(newState).toEqual({
      ...nextState,
      tracks: {
        ...nextState.tracks,
        byId: {
          [id]: [...nextState.tracks.byId[id], ...newTracks],
        },
        pagination: {
          ...nextState.tracks.pagination,
          [id]: newPage,
        },
      },
    });
  });
});
