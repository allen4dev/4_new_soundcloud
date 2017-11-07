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
          <span style={{ backgroundColor: 'black', color: 'white' }}>
            Num of tracks here
          </span>
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
