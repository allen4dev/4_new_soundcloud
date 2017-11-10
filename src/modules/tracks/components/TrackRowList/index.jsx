import React from 'react';

import TrackRow from './../TrackRow';

import List from './../../../../shared/List';

import './index.css';

function renderTrack(handlePlay, handleAdd) {
  return track => {
    // key, {...track}, etc
    return (
      <TrackRow
        key={track.id}
        {...track}
        handlePlay={handlePlay}
        handleAdd={handleAdd}
      />
    );
  };
}

// Refactor
const TrackRowList = ({ items, handlePlay, handleAdd }) => {
  return (
    <div className="TrackRowList">
      <List items={items}>{renderTrack(handlePlay, handleAdd)}</List>
    </div>
  );
};

export default TrackRowList;
