import React, { Component } from 'react';

import TrackCardList from './../../../modules/tracks/components/TrackCardList';
import SetList from './../../../modules/playlists/components/SetList';
import UserList from './../../../modules/users/components/UserList';

export class Overview extends Component {
  render() {
    return (
      <section className="Collection-overview">
        <h3 className="Collection-title">Escuchadas recientemente</h3>
        <TrackCardList items={new Array(6).fill({})} />

        <h3 className="Collection-title">Me gusta</h3>
        <TrackCardList items={new Array(6).fill({})} />

        <h3 className="Collection-title">Listas</h3>
        <SetList items={new Array(6).fill({})} />

        <h3 className="Collection-title">Siguiendo</h3>
        <UserList items={new Array(6).fill({})} />
      </section>
    );
  }
}

export default Overview;
