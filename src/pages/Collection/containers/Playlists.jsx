import React, { Component } from 'react';

import SetList from './../../../modules/playlists/components/SetList';

export class Playlists extends Component {
  render() {
    return (
      <section className="Collection-playlists">
        <SetList items={new Array(24).fill({})} />
      </section>
    );
  }
}

export default Playlists;
