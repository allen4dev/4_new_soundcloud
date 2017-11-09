import React, { Component } from 'react';
import { connect } from 'react-redux';

import TrackCardList from './../../../modules/tracks/components/TrackCardList';

import users from './../../../modules/users';

class Tracks extends Component {
  async componentDidMount() {
    const { items, fetchUserTracks, match } = this.props;

    if (items.length === 0) {
      await fetchUserTracks(match.params.id);
    }
  }

  render() {
    const { items } = this.props;

    return (
      <div className="UserDetail-tracks">
        <TrackCardList items={items} />
      </div>
    );
  }
}

function mapStateToProps(state, { match }) {
  const ids = state.users.tracks.byId[match.params.id] || [];

  return {
    items: ids.map(id => state.tracks.entities[id]),
  };
}

export default connect(mapStateToProps, {
  fetchUserTracks: users.actions.fetchUserTracks,
})(Tracks);
