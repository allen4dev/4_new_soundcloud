import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';

import * as actionTypes from './../actionTypes';
import * as actions from './../actions';
import { INITIAL_STATE } from './../model';

import fixtures from './../fixtures';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const baseURL = 'https://api.soundcloud.com';
const clientID = process.env.REACT_APP_SC_CLIENT_ID;

describe('action creators', () => {
  it('should create an action to set playlists', () => {
    const response = fixtures.getResponse(2);
    const expectedAction = {
      type: actionTypes.FETCH_PLAYLISTS_SUCCESS,
      response,
    };

    expect(actions.setPlaylists(response)).toEqual(expectedAction);
  });

  it('should create an action to set a playlist tracks', () => {
    const { id } = fixtures.getPlaylist();
    const trackIds = fixtures.getTracks(2);
    const expectedAction = {
      type: actionTypes.SET_PLAYLIST_TRACKS,
      payload: { id, trackIds },
    };

    expect(actions.setPlaylistTracks(id, trackIds)).toEqual(expectedAction);
  });
});

describe('async actions', () => {
  let store;

  beforeEach(() => {
    store = mockStore({ playlists: INITIAL_STATE });
  });

  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('should create FETCH_PLAYLISTS_SUCCESS and SET_PLAYLIST_TRACKS in fetchPlaylistTracks action', async () => {
    const { id } = fixtures.getPlaylist();
    const response = fixtures.getTracksResponse(2);
    const rawResponse = Object.values(response.entities.tracks);
    const nextPage = 'https://example.test';
    const url = `${baseURL}/playlists/${id}/tracks?limit=10&linked_partitioning=1&client_id=${clientID}`;

    const expectedActions = [
      {
        type: 'tracks/FETCH_TRACKS_SUCCESS',
        response,
      },
      {
        type: actionTypes.SET_PLAYLIST_TRACKS,
        payload: { id, trackIds: response.result, nextPage },
      },
    ];

    fetchMock.getOnce(url, {
      // Refactor
      body: { collection: rawResponse, next_href: nextPage },
      header: { 'content-type': 'application/json' },
    });

    await store.dispatch(actions.fetchPlaylistTracks(id));

    expect(store.getActions()).toEqual(expectedActions);
  });
});
