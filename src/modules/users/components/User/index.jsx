import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

import defaultImage from './../../../../images/default_image.png';

const User = props => {
  const src = props.avatar_url || defaultImage;

  return (
    <li className="User">
      <Link
        to={`/users/${props.id}/favorited`}
        className="User-photo imageContainer">
        <img src={src} alt={props.username} className="User-image image" />
      </Link>

      <div className="User-description">
        <div className="User-username">{props.username}</div>
      </div>
    </li>
  );
};

export default User;
