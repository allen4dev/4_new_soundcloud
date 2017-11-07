import React from 'react';

import './index.css';

const UserCount = () => {
  return (
    <ul className="UserCount-list">
      <li className="UserCount-item">
        <span className="UserCount-title">Seguidores</span>
        <span className="UserCount-value">124</span>
      </li>
      <li className="UserCount-item">
        <span className="UserCount-title">Siguiendo</span>
        <span className="UserCount-value">754</span>
      </li>
      <li className="UserCount-item">
        <span className="UserCount-title">Pistas</span>
        <span className="UserCount-value">498</span>
      </li>
    </ul>
  );
};

export default UserCount;
