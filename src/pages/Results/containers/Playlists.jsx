import React, { Component } from 'react';

import SetList from './../../../modules/playlists/components/SetList';

export class Playlists extends Component {
  render() {
    return (
      <section className="Playlists">
        <SetList items={new Array(12).fill({})} />
      </section>
    );
  }
}

export default Playlists;
