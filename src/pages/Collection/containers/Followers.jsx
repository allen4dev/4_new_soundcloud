import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserList from './../../../modules/users/components/UserList';

import users from './../../../modules/users';

class Followers extends Component {
  async componentDidMount() {
    const { items, fetchUserFollowers, id } = this.props;

    if (items.length === 0) {
      await fetchUserFollowers(id);
    }
  }

  render() {
    const { items } = this.props;

    return (
      <section className="Collection-followers">
        <UserList items={items} />
      </section>
    );
  }
}

function mapStateToProps(state) {
  const id = state.users.currentUser;
  const followerIds = state.users.followers.byId[id] || [];

  return {
    id,
    items: followerIds.map(id => state.users.entities[id]),
  };
}

export default connect(mapStateToProps, {
  fetchUserFollowers: users.actions.fetchUserFollowers,
})(Followers);
