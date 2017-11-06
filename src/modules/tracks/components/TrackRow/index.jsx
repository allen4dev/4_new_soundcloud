import React from 'react';
import { Link } from 'react-router-dom';

import Actions from './../../../../shared/Actions';

import './index.css';

import defaultImage from './../../../../images/default_image.png';

const TrackRow = () => {
  const src = defaultImage;

  return (
    <li className="TrackRow">
      <div className="TrackRow-photo imageContainer">
        <img
          src={src}
          alt="track description"
          className="TrackRow-image image"
        />
      </div>

      <div className="TrackRow-body">
        <div className="TrackRow-header">
          <div className="TrackRow-play">
            <button className="TrackRow-button btn-play">
              <i className="icon-play3" />
            </button>
          </div>

          <div className="TrackRow-description">
            <Link to="/users/123" className="TrackRow-username">
              allen4dev
            </Link>
            <Link to="/tracks/435" className="TrackRow-title">
              Shirushi
            </Link>
          </div>
        </div>

        <div className="TrackRow-progress">
          <div
            className="TrackRow-progressFilled"
            style={{ flexBasis: '10%' }}
          />
        </div>

        <Actions />
      </div>
    </li>
  );
};

export default TrackRow;
