import React from 'react';

import defaultImage from './../../../../images/default_image.png';

import './index.css';

const Track = () => {
  const src = defaultImage;

  return (
    <li className="Track">
      <div className="Track-photo imageContainer">
        <img src={src} alt="Monochrome Rainbow" className="Track-image image" />
      </div>

      <div className="Track-description">
        <span className="Track-name">Monochrome Rainbow</span>
        <span className="Track-duration">
          <i className="Track-icon icon-play3" /> 4:24
        </span>
      </div>
    </li>
  );
};

export default Track;
