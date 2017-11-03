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

  getResponse(n = 1) {
    let tracks = {};

    while (n-- > 0) {
      const newTrack = this.getTrack();
      tracks = { ...tracks, [newTrack.id]: newTrack };
    }

    return {
      entities: { tracks },
      result:
        Object.keys(tracks).length === 1
          ? Object.keys(tracks)[0]
          : Object.keys(tracks),
    };
  },
};

export default fixtures;
