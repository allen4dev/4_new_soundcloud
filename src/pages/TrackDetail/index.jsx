import React, { Component } from 'react';

import TrackHeader from './../../modules/tracks/components/TrackHeader';

import Info from './components/Info';

import './index.css';

export class TrackDetail extends Component {
  render() {
    return (
      <section className="TrackDetail page">
        <TrackHeader />
        <Info />
      </section>
    );
  }
}

export default TrackDetail;
