import React, { Component } from 'react';

import TrackRowList from './../../../modules/tracks/components/TrackRowList';

export class History extends Component {
  render() {
    return (
      <section className="Collection-history">
        <h3 className="Collection-title">
          Escucha las pista que has reproducido:
        </h3>

        <TrackRowList items={new Array(12).fill({})} />
      </section>
    );
  }
}

export default History;
