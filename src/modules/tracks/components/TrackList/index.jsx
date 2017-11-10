import React from 'react';

import Track from './../Track';

import List from './../../../../shared/List';

import './index.css';

// Refactor: Instead of use the handlePlay and handleAdd with props
// take the dispatch, and dispatch the actions in the Track component
function renderTrack(handlePlay, handleAdd, handleRemove) {
  return track => {
    return (
      <Track
        key={track.id}
        {...track}
        handlePlay={handlePlay}
        handleAdd={handleAdd}
        handleRemove={handleRemove}
      />
    );
  };
}

const TrackList = ({ items, handlePlay, handleAdd, handleRemove }) => {
  return (
    <div className="TrackList">
      <List items={items}>
        {renderTrack(handlePlay, handleAdd, handleRemove)}
      </List>
    </div>
  );
};

export default TrackList;
