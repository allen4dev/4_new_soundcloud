import React from 'react';

import TrackRow from './../TrackRow';

import List from './../../../../shared/List';

import './index.css';

function renderTrack(handlePlay) {
  return track => {
    // key, {...track}, etc
    return <TrackRow key={track.id} {...track} handlePlay={handlePlay} />;
  };
}

const TrackRowList = ({ items, handlePlay }) => {
  return (
    <div className="TrackRowList">
      <List items={items}>{renderTrack(handlePlay)}</List>
    </div>
  );
};

export default TrackRowList;
