import React, { Component } from 'react';
import { connect } from 'react-redux';

import TrackRowList from './../../../modules/tracks/components/TrackRowList';

import tracks from './../../../modules/tracks';

export class History extends Component {
  renderContent() {
    if (this.props.items.length === 0) {
      return <span>No tracks listened</span>;
    }

    return (
      <TrackRowList
        items={this.props.items}
        handlePlay={this.handlePlay}
        handleAdd={this.handleAdd}
      />
    );
  }

  // Refactor
  handleAdd = id => {
    const { items, addToTracklist } = this.props;
    const isInPlaylist = items.findIndex(trackId => trackId === id);
    if (isInPlaylist === -1) {
      addToTracklist(id);
    }
  };

  handlePlay = id => {
    // Refactor: Dont dispatch if the track currently exists
    this.props.setCurrentTrack(id);
  };

  render() {
    return (
      <section className="Collection-history">
        <h3 className="Collection-title">
          Escucha las pista que has reproducido:
        </h3>

        <div className="Collection-historyContent">{this.renderContent()}</div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  const ids = state.tracks.history;

  return {
    items: ids.map(id => state.tracks.entities[id]),
  };
}

export default connect(mapStateToProps, {
  addToTracklist: tracks.actions.addToTracklist,
})(History);
