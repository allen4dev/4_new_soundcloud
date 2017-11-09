import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserList from './../../../modules/users/components/UserList';

import users from './../../../modules/users';

class Followings extends Component {
  async componentDidMount() {
    const { items, fetchUserFollowings, match } = this.props;

    if (items.length === 0) {
      await fetchUserFollowings(match.params.id);
    }
  }

  render() {
    const { items } = this.props;

    return (
      <div className="UserDetail-followings">
        <UserList items={items} />
      </div>
    );
  }
}

function mapStateToProps(state, { match }) {
  const ids = state.users.followings.byId[match.params.id] || [];

  return {
    items: ids.map(id => state.users.entities[id]),
  };
}

export default connect(mapStateToProps, {
  fetchUserFollowings: users.actions.fetchUserFollowings,
})(Followings);
