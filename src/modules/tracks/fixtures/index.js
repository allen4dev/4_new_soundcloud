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
  getResponse(n) {
    let tracks = {};

    while (n-- > 0) {
      const newTrack = this.getTrack();
      tracks = { ...tracks, [newTrack.id]: newTrack };
    }

    return {
      entities: { tracks, playlists: { a: 'foo' }, users: { b: 'bam' } },
      result: Object.keys(tracks),
    };
  },
};

export default fixtures;
