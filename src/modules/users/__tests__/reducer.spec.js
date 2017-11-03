import * as actions from './../actions';
import { INITIAL_STATE } from './../model';
import reducer from './../reducer';

import fixtures from './../fixtures';

test('@@INIT', () => {
  expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
});

describe('entities', () => {
  it('should handle FETCH_USERS_SUCCESS action', () => {
    const response = fixtures.getResponse(2);
    const nextState = reducer(INITIAL_STATE, actions.setUsers(response));

    expect(nextState).toEqual({
      ...INITIAL_STATE,
      entities: response.entities.users,
    });

    const newResponse = fixtures.getResponse(1);
    const newState = reducer(nextState, actions.setUsers(newResponse));

    expect(newState).toEqual({
      ...nextState,
      entities: {
        ...nextState.entities,
        ...newResponse.entities.users,
      },
    });
  });

  it('should handle SET_USER action', () => {
    const response = fixtures.getResponse();
    const nextState = reducer(INITIAL_STATE, actions.setUser(response));

    expect(nextState).toEqual({
      ...INITIAL_STATE,
      entities: response.entities.users,
    });

    const newResponse = fixtures.getResponse();
    const newState = reducer(nextState, actions.setUser(newResponse));

    expect(newState).toEqual({
      ...nextState,
      entities: {
        ...nextState.entities,
        ...newResponse.entities.users,
      },
    });
  });

  it('should handle SET_USER_FOLLOWINGS action', () => {
    const { id } = fixtures.getUser();
    const followings = fixtures.getUserIds(5);
    const nextState = reducer(
      INITIAL_STATE,
      actions.setUserFollowings(id, followings)
    );

    expect(nextState).toEqual({
      ...INITIAL_STATE,
      followings: {
        ...INITIAL_STATE.followings,
        byId: {
          [id]: followings,
        },
      },
    });

    const newFollowings = fixtures.getUserIds(5);
    const newState = reducer(
      nextState,
      actions.setUserFollowings(id, newFollowings)
    );

    expect(newState).toEqual({
      ...nextState,
      followings: {
        ...nextState.followings,
        byId: {
          [id]: [...(nextState.followings.byId[id] || []), ...newFollowings],
        },
      },
    });
  });
});
