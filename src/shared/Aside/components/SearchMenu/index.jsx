import React from 'react';

import { NavLink } from 'react-router-dom';

import './index.css';

// Refactor: Copy paste from Menu
const SeachMenu = ({ items }) => {
  return (
    <ul className="SeachMenu">
      {items.map(item => (
        <li key={item.id} className="SeachMenu-item">
          <NavLink
            exact={item.exact || false}
            className="SeachMenu-link"
            activeClassName="SeachMenu-link--active"
            to={item.path}>
            {item.text}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default SeachMenu;
