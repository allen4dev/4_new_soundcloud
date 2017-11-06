import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

import defaultImage from './../../../../images/default_image.png';

const TrackHeader = () => {
  const src = defaultImage;

  return (
    <header className="TrackHeader">
      <div className="TrackHeader-content">
        <div className="TrackHeader-info">
          <div className="TrackHeader-actions">
            <button className="TrackHeader-play btn btn-play">
              <i className="TrackHeader-icon icon-play3" />
            </button>

            <div className="TrackHeader-details">
              <Link to="/users/123" className="TrackHeader-author styledTag">
                allen4dev
              </Link>
              <span className="TrackHeader-title styledTag">Brave Shine</span>
            </div>
          </div>

          <span className="TrackHeader-date">4 anios</span>
        </div>

        <div className="TrackHeader-progress">
          <div className="TrackHeader-progressFilled">
            Move the progress to her own component
          </div>
        </div>
      </div>

      <div className="TrackHeader-photo imageContainer">
        <img src={src} alt="" className="TrackHeader-image image" />
      </div>
    </header>
  );
};

export default TrackHeader;
