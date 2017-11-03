import configureStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';

import * as actionTypes from './../actionTypes';
import * as actions from './../actions';
import { INITIAL_STATE } from './../model';

import fixtures from './../fixtures';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const baseURL = 'https://api.soundcloud.com';
const clientID = process.env.REACT_APP_SC_CLIENT_ID;

describe('action creators', () => {
  it('should create an action to set the query', () => {
    const query = 'anime';
    const expectedAction = {
      type: actionTypes.SET_QUERY,
      payload: query,
    };

    expect(actions.setQuery(query)).toEqual(expectedAction);
  });

  it('should create an action to set a results from users search', () => {
    const filter = 'users';
    const { result } = fixtures.getResponse(filter, 2);
    const nextPage = 'https://api.soundcloud.com/dummie-next-page';

    const expectedAction = {
      type: actionTypes.FETCH_RESOURCE_SUCCESS,
      payload: { filter, result, nextPage },
    };

    expect(actions.setResults(filter, result, nextPage)).toEqual(
      expectedAction
    );
  });

  it('should create an action to set a results from tracks search', () => {
    const filter = 'tracks';
    const { result } = fixtures.getResponse(filter, 2);
    const nextPage = 'https://api.soundcloud.com/dummie-next-page';

    const expectedAction = {
      type: actionTypes.FETCH_RESOURCE_SUCCESS,
      payload: { filter, result, nextPage },
    };

    expect(actions.setResults(filter, result, nextPage)).toEqual(
      expectedAction
    );
  });

  it('should create an action to set a results from tracks search', () => {
    const filter = 'playlists';
    const { result } = fixtures.getResponse(filter, 2);
    const nextPage = 'https://api.soundcloud.com/dummie-next-page';

    const expectedAction = {
      type: actionTypes.FETCH_RESOURCE_SUCCESS,
      payload: { filter, result, nextPage },
    };

    expect(actions.setResults(filter, result, nextPage)).toEqual(
      expectedAction
    );
  });

  it('should create an action to set if is fetching or not', () => {
    // filter can be tracks, playlists and users
    const filter = 'tracks';
    const expectedAction = {
      type: actionTypes.FETCH_RESOURCE_REQUEST,
      payload: { filter },
    };

    expect(actions.requestResource(filter)).toEqual(expectedAction);
  });
});

xdescribe('async actions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('creates FETCH_RESOURCE_SUCCESS when search has been done', async () => {
    const term = 'anime';
    const filter = 'tracks';
    // can be tracks, playlists or search
    const url = `${baseURL}/${filter}?q=${term}&limit=12&linked_partitioning=1&client_id=${clientID}`;
    const response = fixtures.getResponse(filter, 2);
    const tracks = Object.values(response.entities.tracks);
    const nextPage = 'https://example.test';

    fetchMock.getOnce(url, {
      body: { collection: tracks, next_href: nextPage },
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      {
        type: actionTypes.FETCH_RESOURCE_REQUEST,
        payload: { filter },
      },
      {
        type: 'tracks/FETCH_TRACKS_SUCCESS',
        response,
      },
      {
        type: actionTypes.FETCH_RESOURCE_SUCCESS,
        payload: { filter, result: response.result, nextPage },
      },
    ];

    const store = mockStore(INITIAL_STATE);

    await store.dispatch(actions.searchTracks(term));

    expect(store.getActions()).toEqual(expectedActions);
  });
});
