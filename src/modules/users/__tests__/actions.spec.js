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
      type: actionTypes.SET_USER_FOLLOWINGS,
      payload: { id, followings },
    };

    expect(actions.setUserFollowings(id, followings));
  });
});

describe('async actions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('should create SET_USER after fetch a user', async () => {
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

    const store = mockStore(INITIAL_STATE);

    await store.dispatch(actions.fetchUser(rawUser.id));

    expect(store.getActions()).toEqual(expectedActions);
  });
});
