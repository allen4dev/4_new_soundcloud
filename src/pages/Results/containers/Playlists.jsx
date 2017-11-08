import React, { Component } from 'react';
import { connect } from 'react-redux';

import SetList from './../../../modules/playlists/components/SetList';

import InfiniteScroll from './../../../HOC/InfinityScroll';

import search from './../../../modules/search';

const InfinitePlaylists = InfiniteScroll(SetList);

class Playlists extends Component {
  componentDidMount() {
    const { items, query, isFetching } = this.props;

    if (items.length === 0 && !isFetching) {
      this.fetchData(query);
    }
  }

  componentWillReceiveProps(nextProps) {
    const { query } = this.props;
    if (nextProps.query !== query) {
      this.fetchData(nextProps.query);
    }
  }

  fetchData = async query => {
    const { searchPlaylists } = this.props;

    await searchPlaylists(query);
  };

  searchNextPlaylists = async () => {
    const { searchPlaylistsNextPage } = this.props;

    await searchPlaylistsNextPage();
  };

  render() {
    return (
      <section className="Playlists">
        <InfinitePlaylists
          items={this.props.items}
          isLoading={this.props.isFetching}
          hasNextPage={this.props.hasNextPage}
          onPaginatedSearch={this.searchNextPlaylists}
        />
      </section>
    );
  }
}

function mapStateToProps(state) {
  const ids = state.search.playlists.results;
  const isFetching = state.search.playlists.fetching;
  const hasNextPage = state.search.playlists.nextPage ? true : false;

  return {
    hasNextPage,
    isFetching,
    query: state.search.query,
    items: ids.map(id => state.playlists.entities[id]),
  };
}

export default connect(mapStateToProps, {
  searchPlaylists: search.actions.searchPlaylists,
  searchPlaylistsNextPage: search.actions.searchPlaylistsNextPage,
})(Playlists);
