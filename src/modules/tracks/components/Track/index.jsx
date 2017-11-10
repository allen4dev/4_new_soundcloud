import React from 'react';

import defaultImage from './../../../../images/default_image.png';

import './index.css';

const Track = props => {
  const src = props.artwork_url || defaultImage;

  return (
    <li className="Track">
      <div className="Track-photo imageContainer">
        <img src={src} alt={props.title} className="Track-image image" />
      </div>

      <div className="Track-description">
        <span className="Track-name">{props.title}</span>
        <div className="Track-actions">
          <button
            className="Track-button"
            onClick={() => props.handlePlay(props.id)}>
            <i className="Track-icon icon-play3" />
          </button>

          <span className="Track-duration">{props.duration}</span>
        </div>
      </div>
    </li>
  );
};

export default Track;
