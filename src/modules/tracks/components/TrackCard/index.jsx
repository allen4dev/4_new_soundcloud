import React from 'react';
import { Link } from 'react-router-dom';

import defaultImage from './../../../../images/default_image.png';

import './index.css';

const TrackCard = props => {
  const src = props.artwork_url || defaultImage;
  return (
    <li className="TrackCard">
      <Link
        to={`/tracks/${props.id}`}
        className="TrackCard-photo imageContainer">
        <img src={src} alt={props.title} className="TrackCard-image image" />
      </Link>

      <div className="TrackCard-description">
        <span className="TrackCard-title truncate">{props.title}</span>
        <Link to={`/users/${props.user.id}`} className="TrackCard-username">
          {props.user.username}
        </Link>
      </div>
    </li>
  );
};

export default TrackCard;
