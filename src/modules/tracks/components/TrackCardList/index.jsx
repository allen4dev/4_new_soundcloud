import React from 'react';

import TrackCard from './../TrackCard';

import List from './../../../../shared/List';

import './index.css';

function renderTrack(track, i) {
  // key, {...track}, etc
  return <TrackCard key={i} />;
}

const TrackCardList = ({ items }) => {
  return (
    <div className="TrackCardList">
      <List items={items}>{renderTrack}</List>
    </div>
  );
};

export default TrackCardList;
