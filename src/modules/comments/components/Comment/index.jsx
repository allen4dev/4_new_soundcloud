import React from 'react';

import './index.css';

import defaultImage from './../../../../images/default_image.png';

const Comment = props => {
  const src = props.user.avatar_url || defaultImage;

  return (
    <li className="Comment">
      <div className="Comment-avatar imageContainer">
        <img src={src} alt="user avatar" className="Comment-image image" />
      </div>

      <div className="Comment-description">
        <div className="Comment-info">
          <span className="Comment-author">{props.user.username}</span>
          <span className="Comment-publishedAt">{props.timestamp}</span>
        </div>
        <p className="Comment-body">{props.body}</p>
      </div>
    </li>
  );
};

export default Comment;
