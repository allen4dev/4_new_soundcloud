import React from 'react';
import { Link } from 'react-router-dom';

import Actions from './../../../../shared/Actions';

import './index.css';

import defaultImage from './../../../../images/default_image.png';

const TrackRow = props => {
  const src = props.artwork_url || defaultImage;

  return (
    <li className="TrackRow">
      <div className="TrackRow-photo imageContainer">
        <img src={src} alt={props.title} className="TrackRow-image image" />
      </div>

      <div className="TrackRow-body">
        <div className="TrackRow-header">
          <div className="TrackRow-play">
            <button
              className="TrackRow-button btn-play"
              onClick={() => props.handlePlay(props.id)}>
              <i className="icon-play3" />
            </button>
          </div>

          <div className="TrackRow-description">
            <Link
              to={`/users/${props.user.id}/favorited`}
              className="TrackRow-username">
              {props.user.username}
            </Link>
            <Link to={`/tracks/${props.id}`} className="TrackRow-title">
              {props.title}
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
