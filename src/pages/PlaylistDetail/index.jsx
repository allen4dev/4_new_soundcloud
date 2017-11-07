import React, { Component } from 'react';

import ItemHeader from './../../shared/ItemHeader';

import './index.css';

export class PlaylistDetail extends Component {
  render() {
    return (
      <div className="PlaylistDetail page">
        <ItemHeader>
          <span style={{ backgroundColor: 'black', color: 'white' }}>
            Num of tracks here
          </span>
        </ItemHeader>
      </div>
    );
  }
}

export default PlaylistDetail;
