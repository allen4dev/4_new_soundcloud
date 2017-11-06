import React, { Component } from 'react';

import TrackRowList from './../../../modules/tracks/components/TrackRowList';

export class Tracks extends Component {
  render() {
    return (
      <section className="Tracks">
        <TrackRowList items={new Array(12).fill({})} />
      </section>
    );
  }
}

export default Tracks;
