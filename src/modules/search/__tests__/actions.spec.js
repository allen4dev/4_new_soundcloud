import * as actionTypes from './../actionTypes';
import * as actions from './../actions';

import fixtures from './../fixtures';
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

  // it('should create an action to set the nextPage', () => {
  //   const nextPage = 'https://api.soundcloud.com/some-next-page';
  //   const expectedAction = {
  //     type: actionTypes.
  //   }
  // })
});
