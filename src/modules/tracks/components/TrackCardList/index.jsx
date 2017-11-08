import React from 'react';

import TrackCard from './../TrackCard';

import List from './../../../../shared/List';

import './index.css';

function renderTrack(track) {
  // key, {...track}, etc
  return <TrackCard key={track.id} {...track} />;
}

const TrackCardList = ({ items }) => {
  return (
    <div className="TrackCardList">
      <List items={items}>{renderTrack}</List>
    </div>
  );
};

export default TrackCardList;
