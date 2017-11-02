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
  getResponse(n) {
    let playlists = {};

    while (n-- > 0) {
      const newPlaylist = this.getPlaylist();
      playlists = { ...playlists, [newPlaylist.id]: newPlaylist };
    }

    return {
      entities: { tracks: { a: 'foo' }, playlists, users: { b: 'bam' } },
      result: Object.keys(playlists),
    };
  },
};

export default fixtures;
