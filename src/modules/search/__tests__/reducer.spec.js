import * as actions from './../actions';
import { INITIAL_STATE } from './../model';
import reducer from './../reducer';

import fixtures from './../fixtures';

test('@INIT', () => {
  expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
});

describe('query', () => {
  it('should handle SET_QUERY action', () => {
    const query = 'anime';
    const nextState = reducer(INITIAL_STATE, actions.setQuery(query));

    expect(nextState).toEqual({
      ...INITIAL_STATE,
      query,
    });

    const newQuery = 'games';
    const newState = reducer(nextState, actions.setQuery(newQuery));

    expect(newState).toEqual({
      ...nextState,
      query: newQuery,
    });
  });
});

describe('createReducer: tracks, playlists, users', () => {
  describe('results', () => {
    it('should handle tracks FETCH_RESOURCE_SUCCESS action', () => {
      const filter = 'tracks';
      const { result } = fixtures.getResponse(filter, 2);
      const nextPage = 'https://api.soundcloud.com/tracks-next-page';
      const nextState = reducer(
        INITIAL_STATE,
        actions.setResults(filter, result, nextPage),
      );

      expect(nextState).toEqual({
        ...INITIAL_STATE,
        tracks: {
          ...INITIAL_STATE.tracks,
          nextPage,
          results: result,
        },
      });

      const { result: newResult } = fixtures.getResponse(filter, 3);

      const newState = reducer(
        nextState,
        actions.setResults(filter, newResult, nextPage),
      );

      expect(newState).toEqual({
        ...nextState,
        tracks: {
          ...nextState.tracks,
          results: newResult,
          nextPage,
        },
      });
    });

    it('should not manage state of other filter', () => {
      const nextPage = 'https://dummie.example.test';
      const tracksResult = fixtures.getResponse('tracks', 2).result;
      const stateOne = reducer(
        INITIAL_STATE,
        actions.setResults('tracks', tracksResult, nextPage),
      );

      expect(stateOne).toEqual({
        ...INITIAL_STATE,
        tracks: {
          ...INITIAL_STATE.tracks,
          nextPage,
          results: tracksResult,
        },
      });

      const playlistsResult = fixtures.getResponse('playlists', 2).result;
      const stateTwo = reducer(
        stateOne,
        actions.setResults('playlists', playlistsResult, nextPage),
      );

      expect(stateTwo).toEqual({
        ...stateOne,
        tracks: {
          ...stateOne.tracks,
          results: tracksResult,
        },
        playlists: {
          ...stateOne.playlists,
          nextPage,
          results: playlistsResult,
        },
      });

      const usersResult = fixtures.getResponse('users', 2).result;
      const stateThree = reducer(
        stateTwo,
        actions.setResults('users', usersResult, nextPage),
      );

      expect(stateThree).toEqual({
        ...stateTwo,
        tracks: {
          ...stateTwo.tracks,
          results: tracksResult,
        },
        playlists: {
          ...stateTwo.playlists,
          results: playlistsResult,
        },
        users: {
          ...stateTwo.users,
          nextPage,
          results: usersResult,
        },
      });
    });
  });

  describe('fetching', () => {
    it('should handle FETCH_RESOURCE_REQUEST', () => {
      const filter = 'tracks';
      const nextState = reducer(INITIAL_STATE, actions.requestResource(filter));

      expect(nextState).toEqual({
        ...INITIAL_STATE,
        tracks: {
          ...INITIAL_STATE.tracks,
          fetching: true,
        },
      });
    });

    it('should handle FETCH_RESOURCE_SUCCESS', () => {
      const filter = 'tracks';
      const { result } = fixtures.getResponse(filter, 2);
      const nextPage = 'https://dumiepage.com';
      const nextState = reducer(
        INITIAL_STATE,
        actions.setResults(filter, result, nextPage),
      );

      expect(nextState).toEqual({
        ...INITIAL_STATE,
        tracks: {
          nextPage,
          results: result,
          fetching: false,
        },
      });
    });
  });

  describe('nextPage', () => {
    it('should handle FETCH_RESOURCE_SUCCESS', () => {
      // filter can be tracks, playlists or users
      const filter = 'tracks';
      const { result } = fixtures.getResponse();
      const nextPage = 'https://api.soundcloud.com/page-1';
      const nextState = reducer(
        INITIAL_STATE,
        actions.setResults(filter, result, nextPage),
      );

      expect(nextState).toEqual({
        ...INITIAL_STATE,
        tracks: {
          results: result,
          fetching: false,
          nextPage,
        },
      });
    });
  });
});
