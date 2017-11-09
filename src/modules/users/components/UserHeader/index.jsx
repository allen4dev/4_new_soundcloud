import React from 'react';

import UserCount from './../UserCount';

import './index.css';

import defaultImage from './../../../../images/default_image.png';

const UserHeader = props => {
  const src = props.avatar_url || defaultImage;

  return (
    <div className="UserHeader">
      <div className="UserHeader-content">
        <div className="UserHeader-info">
          <div className="UserHeader-avatar imageContainer">
            <img src={src} alt="allen4dev" className="UserHeader-image image" />
          </div>

          <div className="UserHeader-description">
            <span className="UserHeader-fullname styledTag">
              {props.full_name}
            </span>
            <span className="UserHeader-username styledTag">
              {props.username}
            </span>
          </div>
        </div>

        <UserCount
          followers_count={props.followers_count}
          followings_count={props.followings_count}
          track_count={props.track_count}
        />
      </div>
    </div>
  );
};

export default UserHeader;
