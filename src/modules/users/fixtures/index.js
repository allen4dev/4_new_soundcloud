import uuid from 'uuid';

const fixtures = {
  getUser() {
    return {
      id: uuid(),
      username: 'Random username',
    };
  },

  getRawUsers(n) {
    let users = {};

    while (n-- > 0) {
      users.push(this.getUser());
    }

    return users;
  },

  // Refactor
  getResponse(n = 1) {
    let users = {};

    while (n-- > 0) {
      const newUser = this.getUser();
      users = { ...users, [newUser.id]: newUser };
    }
    return {
      entities: { users },
      result:
        Object.keys(users).length === 1
          ? Object.keys(users)[0]
          : Object.keys(users),
    };
  },
};

export default fixtures;
