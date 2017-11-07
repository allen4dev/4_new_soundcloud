import React, { Component } from 'react';

import TrackList from './../../modules/tracks/components/TrackList';

import ItemHeader from './../../shared/ItemHeader';
import Feedback from './../../shared/Feedback';
import Recommendations from './../../shared/Recommendations';

import './index.css';

class PlaylistDetail extends Component {
  render() {
    return (
      <div className="PlaylistDetail page">
        <ItemHeader>
          <div className="trackCount">
            <span className="number">72</span>
            <span className="number">pistas</span>
            <span className="duration">6:00:46</span>
          </div>
        </ItemHeader>

        <section className="PlaylistDetail-content content">
          <Feedback>
            <TrackList items={new Array(12).fill({})} />
          </Feedback>
          <Recommendations />
        </section>
      </div>
    );
  }
}

export default PlaylistDetail;
