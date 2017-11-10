import React from 'react';

import Track from './../Track';

import List from './../../../../shared/List';

import './index.css';

// Refactor: Instead of use the handlePlay and handleAdd with props
// take the dispatch, and dispatch the actions in the Track component
function renderTrack(handlePlay) {
  return track => {
    return <Track key={track.id} {...track} handlePlay={handlePlay} />;
  };
}

const TrackList = ({ items, handlePlay }) => {
  return (
    <div className="TrackList">
      <List items={items}>{renderTrack(handlePlay)}</List>
    </div>
  );
};

export default TrackList;
