import React, { Component } from 'react';

import UserList from './../../../modules/users/components/UserList';

export class Followers extends Component {
  render() {
    return (
      <section className="Collection-followers">
        <UserList items={new Array(24).fill({})} />
      </section>
    );
  }
}

export default Followers;
