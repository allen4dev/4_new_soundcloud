import uuid from 'uuid';

const fixtures = {
  getUser() {
    return {
      id: uuid(),
      username: 'Random username',
    };
  },
  getResponse(n = 1) {
    let users = {};

    while (n-- > 0) {
      const newUser = this.getUser();
      users = { ...users, [newUser.id]: newUser };
    }

    return {
      entities: { tracks: { a: 'foo' }, playlists: { b: 'bam' }, users },
      result: Object.keys(users),
    };
  },
};

export default fixtures;
