import React from 'react';

import defaultImage from './../../../../images/default_image.png';

import './index.css';

const Track = props => {
  const src = props.artwork_url || defaultImage;

  return (
    <li className="Track">
      <div className="Track-photo imageContainer">
        <img src={src} alt="Monochrome Rainbow" className="Track-image image" />
      </div>

      <div className="Track-description">
        <span className="Track-name">{props.title}</span>
        <span className="Track-duration">
          <i className="Track-icon icon-play3" /> {props.duration}
        </span>
      </div>
    </li>
  );
};

export default Track;
