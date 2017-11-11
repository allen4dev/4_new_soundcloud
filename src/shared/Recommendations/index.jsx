import React, { Component } from 'react';
import { connect } from 'react-redux';

import TrackList from './../../modules/tracks/components/TrackList';

import tracks from './../../modules/tracks';

import './index.css';

class Recommendations extends Component {
  async componentDidMount() {
    const { items, fetchRelatedTracks, id, term } = this.props;

    if (items.length === 0) {
      await fetchRelatedTracks(id, term);
    }
  }

  render() {
    return (
      <div className="Recommendations">
        <TrackList items={this.props.items} />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const { id } = ownProps;
  const trackIds = state.tracks.related[id] || [];

  return {
    items: trackIds.map(id => state.tracks.entities[id]),
  };
}

export default connect(mapStateToProps, {
  fetchRelatedTracks: tracks.actions.fetchRelatedTracks,
})(Recommendations);
