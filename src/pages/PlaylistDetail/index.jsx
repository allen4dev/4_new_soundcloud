import React, { Component } from 'react';
import { connect } from 'react-redux';

import TrackList from './../../modules/tracks/components/TrackList';

import ItemHeader from './../../shared/ItemHeader';
import Feedback from './../../shared/Feedback';
import Recommendations from './../../shared/Recommendations';

import InfiniteScroll from './../../HOC/InfinityScroll';

import playlists from './../../modules/playlists';

import './index.css';

const InfiniteTrackList = InfiniteScroll(TrackList);

class PlaylistDetail extends Component {
  state = {
    loading: true,
  };

  async componentDidMount() {
    const {
      playlist,
      tracks,
      fetchPlaylist,
      fetchPlaylistTracks,
      match,
    } = this.props;

    if (!playlist) {
      // this.setState({ loading: true });
      await fetchPlaylist(match.params.id);
    }

    if (tracks.length === 0) {
      await fetchPlaylistTracks(match.params.id);
    }

    this.setState({ loading: false });
  }

  searchNextTracks = async () => {
    const { fetchPlaylistTracksNextPage, match } = this.props;

    await fetchPlaylistTracksNextPage(match.params.id);
  };

  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>;
    }

    const { playlist, tracks, isFetching, hasNextPage } = this.props;

    const info = {
      created_at: playlist.created_at,
      purchase_url: playlist.purchase_url,
    };

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
              items={tracks}
              isLoading={isFetching}
              hasNextPage={hasNextPage}
              onPaginatedSearch={this.searchNextTracks}
            />
          </Feedback>
          <Recommendations />
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

  return {
    isFetching,
    hasNextPage,
    playlist: state.playlists.entities[match.params.id],
    tracks: ids.map(id => state.tracks.entities[id]),
  };
}

export default connect(mapStateToProps, {
  fetchPlaylist: playlists.actions.fetchPlaylist,
  fetchPlaylistTracks: playlists.actions.fetchPlaylistTracks,
  fetchPlaylistTracksNextPage: playlists.actions.fetchPlaylistTracksNextPage,
})(PlaylistDetail);
