import uuid from 'uuid';

const fixtures = {
  getTrack() {
    return {
      id: uuid(),
      title: 'Random title',
      user: {
        id: `user-${uuid()}`,
        username: 'Random user',
      },
    };
  },

  getPlaylist() {
    return {
      id: uuid(),
      title: 'Random title',
      user: {
        id: `user-${uuid()}`,
        username: 'Random user',
      },
    };
  },

  getUser() {
    return {
      id: uuid(),
      username: 'Random username',
    };
  },

  getResponse(filter, n) {
    let tracks = {};
    let users = {};
    let playlists = {};
    let result = null;

    while (n-- > 0) {
      const newTrack = this.getTrack();
      const newPlaylist = this.getPlaylist();
      const newUser = this.getUser();
      tracks = { ...tracks, [newTrack.id]: newTrack };
      playlists = { ...playlists, [newPlaylist.id]: newPlaylist };
      users = { ...users, [newUser.id]: newUser };
    }

    if (filter === 'tracks') {
      result = Object.keys(tracks);
    } else if (filter === 'playlists') {
      result = Object.keys(playlists);
    } else {
      result = Object.keys(users);
    }

    return {
      entities: { tracks, playlists, users },
      result,
    };
  },
};

export default fixtures;
