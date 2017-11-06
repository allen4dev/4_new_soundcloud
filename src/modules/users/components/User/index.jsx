import React from 'react';

import defaultImage from './../../../../images/default_image.png';

import './index.css';

const User = () => {
  const src = defaultImage;

  return (
    <li className="User">
      <div className="User-photo imageContainer">
        <img src={src} alt="User image" className="User-image image" />
      </div>

      <div className="User-description">
        <span className="User-username">allen4dev</span>
        <div className="User-info">
          <span className="User-count User-followers">
            <i className="User-countIcon icon-users" /> 7
          </span>

          <span className="User-count User-followings">
            <i className="User-countIcon icon-music" /> 852
          </span>
        </div>
        <button className="User-follow btn-flat">Seguir</button>
      </div>
    </li>
  );
};

export default User;
