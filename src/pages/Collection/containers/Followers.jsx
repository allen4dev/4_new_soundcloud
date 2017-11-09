import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserList from './../../../modules/users/components/UserList';

import InfiniteScroll from './../../../HOC/InfinityScroll';

import users from './../../../modules/users';

const InfiniteUsers = InfiniteScroll(UserList);

class Followers extends Component {
  async componentDidMount() {
    const { items, fetchUserFollowers, id } = this.props;

    if (items.length === 0) {
      await fetchUserFollowers(id);
    }
  }

  searchNextPage = async () => {
    const { id, fetchNextFollowers } = this.props;

    await fetchNextFollowers(id);
  };

  render() {
    const { items, isFetching, hasNextPage } = this.props;

    return (
      <section className="Collection-followers">
        <InfiniteUsers
          items={items}
          isLoading={isFetching}
          hasNextPage={hasNextPage}
          onPaginatedSearch={this.searchNextPage}
        />
      </section>
    );
  }
}

function mapStateToProps(state) {
  const id = state.users.currentUser;
  const isFetching = state.users.followers.fetching[id];
  const hasNextPage = state.users.followers.pagination[id] ? true : false;
  const followerIds = state.users.followers.byId[id] || [];

  return {
    id,
    isFetching,
    hasNextPage,
    items: followerIds.map(id => state.users.entities[id]),
  };
}

export default connect(mapStateToProps, {
  fetchUserFollowers: users.actions.fetchUserFollowers,
  fetchNextFollowers: users.actions.fetchNextFollowers,
})(Followers);
