import React, { Component } from 'react';

import UserList from './../../../modules/users/components/UserList';

export class Following extends Component {
  render() {
    return (
      <section className="Collection-following">
        <UserList items={new Array(24).fill({})} />
      </section>
    );
  }
}

export default Following;
