import React, { Component } from 'react';

import TrackHeader from './../../modules/tracks/components/TrackHeader';

import Content from './components/Content';

import './index.css';

export class TrackDetail extends Component {
  render() {
    return (
      <section className="TrackDetail page">
        <TrackHeader />
        <Content />
      </section>
    );
  }
}

export default TrackDetail;
