import React from 'react';

import SetList from './../../../modules/playlists/components/SetList';

const Playlists = () => {
  return (
    <div className="UserDetail-playlists">
      <SetList items={new Array(12).fill({})} />
    </div>
  );
};

export default Playlists;
