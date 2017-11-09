import React, { Component } from 'react';
import { connect } from 'react-redux';

import TrackCardList from './../../../modules/tracks/components/TrackCardList';
import SetList from './../../../modules/playlists/components/SetList';
import UserList from './../../../modules/users/components/UserList';

import users from './../../../modules/users';

export class Overview extends Component {
  async componentDidMount() {
    const {
      id,
      favorited,
      playlists,
      followers,

      fetchUserFavorites,
      fetchUserPlaylists,
      fetchUserFollowers,
    } = this.props;

    if (
      favorited.length === 0 ||
      playlists.length === 0 ||
      followers.length === 0
    ) {
      await Promise.all([
        fetchUserFavorites(id),
        fetchUserPlaylists(id),
        fetchUserFollowers(id),
      ]);
    }
  }

  render() {
    const { favorited, playlists, followers } = this.props;

    {
      /* <h3 className="Collection-title">Escuchadas recientemente:</h3>
        <TrackCardList items={new Array(6).fill({})} /> */
    }
    return (
      <section className="Collection-overview">
        <h3 className="Collection-title">Me gusta:</h3>
        <TrackCardList items={favorited} />

        <h3 className="Collection-title">Listas:</h3>
        <SetList items={playlists} />

        <h3 className="Collection-title">Siguiendo:</h3>
        <UserList items={followers} />
      </section>
    );
  }
}

function mapStateToProps(state) {
  const id = state.users.currentUser;
  const trackIds = state.users.favorited.byId[id] || [];
  const playlistIds = state.users.playlists.byId[id] || [];
  const userIds = state.users.followers.byId[id] || [];

  return {
    id,
    favorited: trackIds.map(id => state.tracks.entities[id]).slice(0, 6),
    playlists: playlistIds.map(id => state.playlists.entities[id]).slice(0, 6),
    followers: userIds.map(id => state.users.entities[id]).slice(0, 6),
  };
}

export default connect(mapStateToProps, {
  fetchUserFavorites: users.actions.fetchUserFavorites,
  fetchUserPlaylists: users.actions.fetchUserPlaylists,
  fetchUserFollowers: users.actions.fetchUserFollowers,
})(Overview);
