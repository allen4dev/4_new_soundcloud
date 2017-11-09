import React, { Component } from 'react';
import { connect } from 'react-redux';

import SetList from './../../../modules/playlists/components/SetList';

import users from './../../../modules/users';

class Playlists extends Component {
  async componentDidMount() {
    const { items, fetchUserPlaylists, id } = this.props;

    if (items.length === 0) {
      await fetchUserPlaylists(id);
    }
  }

  render() {
    const { items } = this.props;

    return (
      <section className="Collection-playlists">
        <SetList items={items} />
      </section>
    );
  }
}

function mapStateToProps(state) {
  const id = state.users.currentUser;
  const playlistIds = state.users.playlists.byId[id] || [];

  return {
    id,
    items: playlistIds.map(id => state.playlists.entities[id]),
  };
}

export default connect(mapStateToProps, {
  fetchUserPlaylists: users.actions.fetchUserPlaylists,
})(Playlists);
