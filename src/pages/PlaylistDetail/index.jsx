import React, { Component } from 'react';
import { connect } from 'react-redux';

import TrackList from './../../modules/tracks/components/TrackList';

import ItemHeader from './../../shared/ItemHeader';
import Feedback from './../../shared/Feedback';
import Recommendations from './../../shared/Recommendations';

import playlists from './../../modules/playlists';

import './index.css';

class PlaylistDetail extends Component {
  state = {
    loading: true,
  };

  async componentDidMount() {
    const { playlist, fetchPlaylist, match } = this.props;

    if (!playlist) {
      this.setState({ loading: true });
      await fetchPlaylist(match.params.id);
    }

    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>;
    }

    const { playlist } = this.props;
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
            <TrackList items={new Array(12).fill({})} />
          </Feedback>
          <Recommendations />
        </section>
      </div>
    );
  }
}

function mapStateToProps(state, { match }) {
  return {
    playlist: state.playlists.entities[match.params.id],
  };
}

export default connect(mapStateToProps, {
  fetchPlaylist: playlists.actions.fetchPlaylist,
})(PlaylistDetail);
