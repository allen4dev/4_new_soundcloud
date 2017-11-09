import React, { Component } from 'react';
import { connect } from 'react-redux';

import SetList from './../../../modules/playlists/components/SetList';

import InfiniteScroll from './../../../HOC/InfinityScroll';

import users from './../../../modules/users';

const InfinitePlaylists = InfiniteScroll(SetList);

class Playlists extends Component {
  async componentDidMount() {
    const { items, fetchUserPlaylists, id } = this.props;

    if (items.length === 0) {
      await fetchUserPlaylists(id);
    }
  }

  searchNextPage = async () => {
    const { id, fetchNextPlaylists } = this.props;

    await fetchNextPlaylists(id);
  };

  render() {
    const { items, isFetching, hasNextPage } = this.props;

    return (
      <section className="Collection-playlists">
        <InfinitePlaylists
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
  const isFetching = state.users.playlists.fetching[id];
  const hasNextPage = state.users.playlists.pagination[id] ? true : false;
  const playlistIds = state.users.playlists.byId[id] || [];

  return {
    id,
    isFetching,
    hasNextPage,
    items: playlistIds.map(id => state.playlists.entities[id]),
  };
}

export default connect(mapStateToProps, {
  fetchUserPlaylists: users.actions.fetchUserPlaylists,
  fetchNextPlaylists: users.actions.fetchNextPlaylists,
})(Playlists);
