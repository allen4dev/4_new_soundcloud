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

describe('Action creators', () => {
  it('should create an action to set tracks', () => {
    const response = fixtures.getResponse();
    const expectedAction = {
      type: actionTypes.FETCH_TRACKS_SUCCESS,
      response,
    };

    expect(actions.setTracks(response)).toEqual(expectedAction);
  });

  it('should create an action to set a single track', () => {
    const response = fixtures.getResponse();

    const expectedAction = {
      type: actionTypes.SET_TRACK,
      response,
    };

    expect(actions.setTrack(response)).toEqual(expectedAction);
  });
});

describe('Async actions', () => {
  let store;

  beforeEach(() => {
    store = mockStore(INITIAL_STATE);
  });

  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('should create SET_TRACK after fetchSingleTrack action', async () => {
    const response = fixtures.getResponse();
    const url = `${baseURL}/tracks/${response.result}?client_id=${clientID}`;
    const track = response.entities.tracks[response.result];

    const expectedActions = [
      {
        type: actionTypes.SET_TRACK,
        response,
      },
    ];

    fetchMock.getOnce(url, {
      body: track,
      headers: { 'content-type': 'application/json' },
    });

    await store.dispatch(actions.fetchTrack(response.result));

    expect(store.getActions()).toEqual(expectedActions);
  });
});
