import React, { Component } from 'react';
import { connect } from 'react-redux';

import SetList from './../../../modules/playlists/components/SetList';

import users from './../../../modules/users';

class Playlists extends Component {
  async componentDidMount() {
    const { items, fetchUserPlaylists, match } = this.props;

    if (items.length === 0) {
      await fetchUserPlaylists(match.params.id);
    }
  }

  render() {
    const { items } = this.props;

    return (
      <div className="UserDetail-playlists">
        <SetList items={items} />
      </div>
    );
  }
}

function mapStateToProps(state, { match }) {
  const ids = state.users.playlists.byId[match.params.id] || [];

  return {
    items: ids.map(id => state.playlists.entities[id]),
  };
}

export default connect(mapStateToProps, {
  fetchUserPlaylists: users.actions.fetchUserPlaylists,
})(Playlists);
