import React from 'react';

import './index.css';

const UserCount = props => {
  return (
    <ul className="UserCount-list">
      <li className="UserCount-item">
        <span className="UserCount-title">Seguidores</span>
        <span className="UserCount-value">{props.followers_count}</span>
      </li>
      <li className="UserCount-item">
        <span className="UserCount-title">Siguiendo</span>
        <span className="UserCount-value">{props.followings_count}</span>
      </li>
      <li className="UserCount-item">
        <span className="UserCount-title">Pistas</span>
        <span className="UserCount-value">{props.track_count}</span>
      </li>
    </ul>
  );
};

export default UserCount;
