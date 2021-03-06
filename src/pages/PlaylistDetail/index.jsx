import React, { Component } from 'react';
import { connect } from 'react-redux';

import TrackList from './../../modules/tracks/components/TrackList';

import ItemHeader from './../../shared/ItemHeader';
import Feedback from './../../shared/Feedback';
import Recommendations from './../../shared/Recommendations';

import InfiniteScroll from './../../HOC/InfinityScroll';

import playlists from './../../modules/playlists';
import tracks from './../../modules/tracks';

import './index.css';

const InfiniteTrackList = InfiniteScroll(TrackList);

class PlaylistDetail extends Component {
  state = {
    loading: true,
  };

  async componentDidMount() {
    let { playlist } = this.props;

    const {
      items,
      related,
      fetchPlaylist,
      fetchPlaylistTracks,
      fetchRelatedPlaylists,
      match,
    } = this.props;

    if (!playlist) {
      // this.setState({ loading: true });
      playlist = await fetchPlaylist(match.params.id);
    }

    if (items.length === 0) {
      await fetchPlaylistTracks(match.params.id);
    }

    if (related.length === 0) {
      await fetchRelatedPlaylists(match.params.id, playlist.title);
    }

    this.setState({ loading: false });
  }

  searchNextTracks = async () => {
    const { fetchPlaylistTracksNextPage, match } = this.props;

    await fetchPlaylistTracksNextPage(match.params.id);
  };

  handlePlay = id => {
    // Refactor: Dont dispatch if the track currently exists
    this.props.setCurrentTrack(id);
  };

  handleAdd = id => {
    const { tracklist, addToTracklist } = this.props;
    const isInPlaylist = tracklist.findIndex(trackId => trackId === id);
    if (isInPlaylist === -1) {
      addToTracklist(id);
    }
  };

  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>;
    }

    const { playlist, items, isFetching, hasNextPage } = this.props;

    const info = {
      created_at: playlist.created_at,
      purchase_url: playlist.purchase_url,
    };

    //  Refactor: Create a PlaylistRowList
    return (
      <div className="PlaylistDetail page">
        <ItemHeader {...playlist}>
          <div className="trackCount">
            <span className="number">{playlist.track_count}</span>
            <span className="number">pistas</span>
            <span className="duration">6:00:46</span>
          </div>
        </ItemHeader>

        <section className="PlaylistDetail-content content">
          <Feedback info={info}>
            <InfiniteTrackList
              items={items}
              isLoading={isFetching}
              hasNextPage={hasNextPage}
              handlePlay={this.handlePlay}
              handleAdd={this.handleAdd}
              onPaginatedSearch={this.searchNextTracks}
            />
          </Feedback>
          <Recommendations>
            <TrackList items={this.props.related} />
          </Recommendations>
        </section>
      </div>
    );
  }
}

function mapStateToProps(state, { match }) {
  const ids = state.playlists.tracks.byId[match.params.id] || [];
  const isFetching = state.playlists.tracks.fetching[match.params.id];
  const hasNextPage = state.playlists.tracks.pagination[match.params.id]
    ? true
    : false;
  const relatedIds = state.playlists.related[match.params.id] || [];

  return {
    isFetching,
    hasNextPage,
    tracklist: state.tracks.playing.list,
    playlist: state.playlists.entities[match.params.id],
    items: ids.map(id => state.tracks.entities[id]),
    related: relatedIds.map(id => state.playlists.entities[id]),
  };
}

export default connect(mapStateToProps, {
  fetchPlaylist: playlists.actions.fetchPlaylist,
  fetchPlaylistTracks: playlists.actions.fetchPlaylistTracks,
  fetchPlaylistTracksNextPage: playlists.actions.fetchPlaylistTracksNextPage,
  fetchRelatedPlaylists: playlists.actions.fetchRelatedPlaylists,
  setCurrentTrack: tracks.actions.setCurrentTrack,
  addToTracklist: tracks.actions.addToTracklist,
})(PlaylistDetail);
