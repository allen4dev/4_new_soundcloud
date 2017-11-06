import React from 'react';

import defaultImage from './../../../../images/default_image.png';

import './index.css';

const User = () => {
  const src = defaultImage;

  return (
    <li className="UserCard">
      <div className="UserCard-photo imageContainer">
        <img src={src} alt="UserCard image" className="UserCard-image image" />
      </div>

      <div className="UserCard-description">
        <span className="UserCard-username">allen4dev</span>
        <div className="UserCard-info">
          <span className="UserCard-count UserCard-followers">
            <i className="UserCard-countIcon icon-users" /> 7
          </span>

          <span className="UserCard-count UserCard-followings">
            <i className="UserCard-countIcon icon-music" /> 852
          </span>
        </div>
        <button className="UserCard-follow btn-flat">Seguir</button>
      </div>
    </li>
  );
};

export default User;
