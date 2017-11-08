export const INITIAL_STATE = {
  query: null,
  filter: 'tracks',
  tracks: {
    results: [],
    fetching: false,
    nextPage: null,
  },
  playlists: {
    results: [],
    fetching: false,
    nextPage: null,
  },
  users: {
    results: [],
    fetching: false,
    nextPage: null,
  },
};
