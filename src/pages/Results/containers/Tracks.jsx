import React, { Component } from 'react';
import { connect } from 'react-redux';

import TrackRowList from './../../../modules/tracks/components/TrackRowList';

import InfiniteScroll from './../../../HOC/InfinityScroll';

import search from './../../../modules/search';
import tracks from './../../../modules/tracks';

const InfiniteTracks = InfiniteScroll(TrackRowList);

class Tracks extends Component {
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
    const { searchTracks } = this.props;

    await searchTracks(query);
  };

  searchNextTracks = async () => {
    const { searchTracksNextPage } = this.props;

    await searchTracksNextPage();
  };

  handlePlay = id => {
    this.props.setCurrentTrack(id);
  };

  handleAdd = id => {
    const { tracklist } = this.props;
    const isInPlaylist = tracklist.findIndex(trackId => trackId === id);
    if (isInPlaylist === -1) {
      this.props.addToTracklist(id);
    }
  };

  render() {
    return (
      <section className="Tracks">
        <InfiniteTracks
          items={this.props.items}
          isLoading={this.props.isFetching}
          hasNextPage={this.props.hasNextPage}
          handlePlay={this.handlePlay}
          handleAdd={this.handleAdd}
          onPaginatedSearch={this.searchNextTracks}
        />
      </section>
    );
  }
}

function mapStateToProps(state) {
  const ids = state.search.tracks.results;
  const isFetching = state.search.tracks.fetching;
  const hasNextPage = state.search.tracks.nextPage ? true : false;

  return {
    isFetching,
    hasNextPage,
    tracklist: state.tracks.playing.list,
    query: state.search.query,
    items: ids.map(id => state.tracks.entities[id]),
  };
}

export default connect(mapStateToProps, {
  setCurrentTrack: tracks.actions.setCurrentTrack,
  addToTracklist: tracks.actions.addToTracklist,
  searchTracks: search.actions.searchTracks,
  searchTracksNextPage: search.actions.searchTracksNextPage,
})(Tracks);
