import React from 'react';

import UserCount from './../UserCount';

import './index.css';

import defaultImage from './../../../../images/default_image.png';

const UserHeader = () => {
  const src = defaultImage;

  return (
    <div className="UserHeader">
      <div className="UserHeader-content">
        <div className="UserHeader-info">
          <div className="UserHeader-avatar imageContainer">
            <img src={src} alt="allen4dev" className="UserHeader-image image" />
          </div>

          <div className="UserHeader-description">
            <span className="UserHeader-fullname styledTag">Alan Aliaga</span>
            <span className="UserHeader-username styledTag">allen4dev</span>
          </div>
        </div>

        <UserCount />
      </div>
    </div>
  );
};

export default UserHeader;
