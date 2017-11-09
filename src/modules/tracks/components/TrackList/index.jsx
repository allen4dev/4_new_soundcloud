import React from 'react';

import Track from './../Track';

import List from './../../../../shared/List';

import './index.css';

function renderTrack(track) {
  return <Track key={track.id} {...track} />;
}

const TrackList = ({ items }) => {
  return (
    <div className="TrackList">
      <List items={items}>{renderTrack}</List>
    </div>
  );
};

export default TrackList;
