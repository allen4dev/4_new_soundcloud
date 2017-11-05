import React from 'react';
import { Link } from 'react-router-dom';

import defaultImage from './../../../../images/default_image.png';

import './index.css';

const TrackCard = props => {
  const src = defaultImage;
  return (
    <li className="TrackCard">
      <Link to="/tracks/123" className="TrackCard-photo imageContainer">
        <img src={src} alt="Some track" className="TrackCard-image image" />
      </Link>

      <div className="TrackCard-description">
        <Link to="/tracks/123" className="TrackCard-title truncate">
          Monochrome Rainbow
        </Link>
        <Link to="/users/456" className="TrackCard-username">
          allen4dev
        </Link>
      </div>
    </li>
  );
};

export default TrackCard;
