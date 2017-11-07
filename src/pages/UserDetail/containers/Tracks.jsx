import React from 'react';

import TrackCardList from './../../../modules/tracks/components/TrackCardList';

const Tracks = () => {
  return (
    <div className="UserDetail-tracks">
      <TrackCardList items={new Array(12).fill({})} />
    </div>
  );
};

export default Tracks;
