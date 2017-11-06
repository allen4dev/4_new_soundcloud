import React, { Component } from 'react';

import TrackCardList from './../../../modules/tracks/components/TrackCardList';

export class Tracks extends Component {
  render() {
    return (
      <section className="Collection-tracks">
        <TrackCardList items={new Array(24).fill({})} />
      </section>
    );
  }
}

export default Tracks;
