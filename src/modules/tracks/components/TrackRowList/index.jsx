import React from 'react';

import TrackRow from './../TrackRow';

import List from './../../../../shared/List';

import './index.css';

function renderTrack(track) {
  // key, {...track}, etc
  return <TrackRow key={track.id} {...track} />;
}

const TrackRowList = ({ items }) => {
  return (
    <div className="TrackRowList">
      <List items={items}>{renderTrack}</List>
    </div>
  );
};

export default TrackRowList;
