import React from 'react';

import Playlist from './../Playlist';

import List from './../../../../shared/List';

import './index.css';

function renderPlaylist(playlist) {
  return <Playlist key={playlist.id} {...playlist} />;
}

const SetList = ({ items }) => {
  return (
    <section className="SetList">
      <List items={items}>{renderPlaylist}</List>
    </section>
  );
};

export default SetList;
