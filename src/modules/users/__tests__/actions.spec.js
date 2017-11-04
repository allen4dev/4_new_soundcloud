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
  it('should create an action to set users', () => {
    const response = fixtures.getResponse(2);
    const expectedAction = {
      type: actionTypes.FETCH_USERS_SUCCESS,
      response,
    };

    expect(actions.setUsers(response)).toEqual(expectedAction);
  });

  it('should create an action to set a single user', () => {
    const response = fixtures.getResponse();
    const expectedAction = {
      type: actionTypes.SET_USER,
      response,
    };

    expect(actions.setUser(response)).toEqual(expectedAction);
  });

  it('should create an action to set user followings', () => {
    const { id } = fixtures.getUser();
    const followings = fixtures.getRawUsers().map(user => user.id);
    const expectedAction = {
      type: actionTypes.SET_RESOURCES,
      payload: { id, filter: 'followings', followings },
    };

    expect(actions.setResource(id, 'followings', followings));
  });

  it('should create an action to set a resource next page', () => {
    const nextPage = 'https://example.test/nextPage';
    // filter can be playlists followers or followings
    const filter = 'playlists';
    const expectedAction = {
      type: actionTypes.SET_RESOURCES_NEXT_PAGE,
      payload: { filter, nextPage },
    };

    expect(actions.setResourceNextPage(filter, nextPage));
  });
});

describe('async actions', () => {
  let store;
  beforeEach(() => {
    store = mockStore(INITIAL_STATE);
  });

  afterEach(() => {
    // store = null;

    fetchMock.reset();
    fetchMock.restore();
  });

  it('should create SET_USER after fetchUser action', async () => {
    const response = fixtures.getResponse();
    const rawUser = Object.values(response.entities.users)[0];
    const url = `${baseURL}/users/${rawUser.id}?client_id=${clientID}`;

    fetchMock.getOnce(url, {
      body: rawUser,
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      {
        type: actionTypes.SET_USER,
        response,
      },
    ];

    await store.dispatch(actions.fetchUser(rawUser.id));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create FETCH_USER_SUCCESS and SET_RESOURCES after fethUserFollowings action', async () => {
    const { id } = fixtures.getUser();
    const response = fixtures.getResponse(2);
    const rawResponse = Object.values(response.entities.users);
    const url = `${baseURL}/users/${id}/followings?limit=12&linked_partitioning=1&client_id=${clientID}`;

    const nextPage = 'https://example.test';

    const expectedActions = [
      {
        type: actionTypes.FETCH_USERS_SUCCESS,
        response,
      },
      {
        type: actionTypes.SET_RESOURCES,
        payload: {
          id,
          filter: 'followings',
          result: response.result,
          nextPage,
        },
      },
    ];

    fetchMock.getOnce(url, {
      body: { collection: rawResponse, next_href: nextPage },
      headers: { 'content-type': 'application/json' },
    });

    await store.dispatch(actions.fetchUserFollowings(id));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should create SET_RESOURCES after fetchUserPlaylists actions', async () => {
    const { id } = fixtures.getUser();
    const nextPage = `${baseURL}/dummie-page-1`;
    const response = fixtures.getPlaylistsResponse(2);
    const rawResponse = Object.values(response.entities.playlists);
    const url = `${baseURL}/users/${id}/playlists?limit=12&linked_partitioning=1&client_id=${clientID}`;

    const expectedActions = [
      {
        type: 'playlists/FETCH_PLAYLISTS_SUCCESS',
        response,
      },
      {
        type: actionTypes.SET_RESOURCES,
        payload: { id, filter: 'playlists', result: response.result, nextPage },
      },
    ];

    fetchMock.getOnce(url, {
      body: { collection: rawResponse, next_href: nextPage },
      headers: { 'content-type': 'application/json' },
    });

    await store.dispatch(actions.fetchUserPlaylists(id));

    expect(store.getActions()).toEqual(expectedActions);
  });
});
