import React, { Component } from 'react';
import { connect } from 'react-redux';

import TrackList from './../../../../modules/tracks/components/TrackList';

import tracks from './../../../../modules/tracks';

import './index.css';

class MiniPlaylist extends Component {
  renderTracks(tracks) {
    if (tracks.length === 0) {
      return <span className="">Empty tracklist</span>;
    }

    return <TrackList items={tracks} handlePlay={this.handlePlay} />;
  }

  handlePlay = id => {
    this.props.setCurrentTrack(id);
  };

  render() {
    const { display, list } = this.props;

    return (
      <section className="Miniplaylist" style={{ display }}>
        <header className="Miniplaylist-header">
          <h4 className="Miniplaylist-title">A continuacion:</h4>
          <div className="Miniplaylist-actions">
            <button className="Miniplaylist-drop">Borrar</button>
            <button className="Miniplaylist-close btn">
              <i className="Miniplaylist-icon icon-cross" />
            </button>
          </div>
        </header>

        <div className="Miniplaylist-tracklist">{this.renderTracks(list)}</div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  const trackIds = state.tracks.playing.list;

  return {
    list: trackIds.map(id => state.tracks.entities[id]),
  };
}

export default connect(mapStateToProps, {
  setCurrentTrack: tracks.actions.setCurrentTrack,
})(MiniPlaylist);
