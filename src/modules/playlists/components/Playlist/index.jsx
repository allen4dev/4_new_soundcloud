import React from 'react';
import { Link } from 'react-router-dom';

import defaultImage from './../../../../images/default_image.png';

import './index.css';

const Playlist = () => {
  const src = defaultImage;

  return (
    <li className="Playlist">
      <Link to="/playlists/123" className="Playlist-photo imageContainer">
        <img src={src} alt="" className="Playlist-image image" />

        <div className="Playlist-trackCount">
          <span className="Playlist-count">55</span>
          <span className="Playlist-countText">pistas</span>
        </div>
      </Link>

      <div className="Playlist-description">
        <span className="Playlist-title truncate">Anime best collection</span>
        <Link to="/users/123" className="Playlist-author">
          allen4dev
        </Link>
      </div>
    </li>
  );
};

export default Playlist;
