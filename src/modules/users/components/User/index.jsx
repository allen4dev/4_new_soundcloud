import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

import defaultImage from './../../../../images/default_image.png';

const User = () => {
  const src = defaultImage;

  return (
    <li className="User">
      <Link to="/users/123" className="User-photo imageContainer">
        <img src={src} alt="" className="User-image image" />
      </Link>

      <div className="User-description">
        <div className="User-username">allen4dev</div>
      </div>
    </li>
  );
};

export default User;
