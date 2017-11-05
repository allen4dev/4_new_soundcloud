import React from 'react';

import TrackCardList from './../../modules/tracks/components/TrackCardList';

import './index.css';

const PopularTracks = () => {
  return (
    <div className="PopularTracks">
      <h2 className="PopularTracks-title">
        Escucha la musica del momento gratis en la comunidad SoundCloud
      </h2>

      <TrackCardList items={new Array(12).fill({})} />

      <button className="PopularTracks-button btn btn-normal">Explora</button>
    </div>
  );
};

export default PopularTracks;
