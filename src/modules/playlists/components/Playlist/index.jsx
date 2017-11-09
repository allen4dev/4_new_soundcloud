import React from 'react';
import { Link } from 'react-router-dom';

import defaultImage from './../../../../images/default_image.png';

import './index.css';

const Playlist = props => {
  const src = props.artwork_url || defaultImage;

  return (
    <li className="Playlist">
      <Link
        to={`/playlists/${props.id}`}
        className="Playlist-photo imageContainer">
        <img src={src} alt={props.title} className="Playlist-image image" />

        <div className="Playlist-trackCount">
          <span className="Playlist-count">{props.track_count}</span>
          <span className="Playlist-countText">pistas</span>
        </div>
      </Link>

      <div className="Playlist-description">
        <span className="Playlist-title truncate">{props.title}</span>
        <Link
          to={`/users/${props.user.id}/favorited`}
          className="Playlist-author">
          {props.user.username}
        </Link>
      </div>
    </li>
  );
};

export default Playlist;
