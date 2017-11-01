import React from 'react';

import { NavLink } from 'react-router-dom';

import './index.css';

const Menu = ({ items }) => {
  return (
    <ul className="Menu">
      {items.map(item => (
        <li key={item.id} className="Menu-item">
          <NavLink
            className="Menu-link"
            activeClassName="Menu-link--active"
            to={item.path}>
            {item.text}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
