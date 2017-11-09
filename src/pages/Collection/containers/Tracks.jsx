import React, { Component } from 'react';
import { connect } from 'react-redux';

import TrackCardList from './../../../modules/tracks/components/TrackCardList';

import users from './../../../modules/users';

export class Tracks extends Component {
  async componentDidMount() {
    const { items, fetchUserFavorites, id } = this.props;

    if (items.length === 0) {
      await fetchUserFavorites(id);
    }
  }

  render() {
    const { items } = this.props;

    return (
      <section className="Collection-tracks">
        <TrackCardList items={items} />
      </section>
    );
  }
}

function mapStateToProps(state) {
  const id = state.users.currentUser;
  const trackIds = state.users.favorited.byId[id] || [];

  return {
    id,
    items: trackIds.map(id => state.tracks.entities[id]),
  };
}

export default connect(mapStateToProps, {
  fetchUserFavorites: users.actions.fetchUserFavorites,
})(Tracks);
