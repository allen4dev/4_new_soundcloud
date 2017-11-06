import React from 'react';

import Playlist from './../Playlist';

import List from './../../../../shared/List';

import './index.css';

function renderPlaylist(playlist, i) {
  return <Playlist key={i} />;
}

const SetList = ({ items }) => {
  return (
    <section className="SetList">
      <List items={items}>{renderPlaylist}</List>
    </section>
  );
};

export default SetList;
