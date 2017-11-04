import uuid from 'uuid';

const fixtures = {
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

  getTracks(n) {
    let tracks = [];

    while (n-- > 0) {
      tracks.push(uuid());
    }

    return tracks;
  },

  getTracksResponse(n) {
    let tracks = {};

    while (n-- > 0) {
      const newTrack = this.getPlaylist();
      tracks = { ...tracks, [newTrack.id]: newTrack };
    }

    return {
      entities: { tracks },
      result: Object.keys(tracks),
    };
  },

  getResponse(n) {
    let playlists = {};

    while (n-- > 0) {
      const newPlaylist = this.getPlaylist();
      playlists = { ...playlists, [newPlaylist.id]: newPlaylist };
    }

    return {
      entities: { playlists },
      result: Object.keys(playlists),
    };
  },
};

export default fixtures;
