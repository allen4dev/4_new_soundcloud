import React, { Component } from 'react';

import UserList from './../../../modules/users/components/UserList';

export class Users extends Component {
  render() {
    return (
      <section className="Users">
        <UserList items={new Array(12).fill({})} />
      </section>
    );
  }
}

export default Users;
