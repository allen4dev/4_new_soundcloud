import React from 'react';

import { NavLink } from 'react-router-dom';

import './index.css';

// Refactor: Copy paste from Menu
const SearchMenu = ({ items }) => {
  return (
    <div className="SearchMenu">
      <h4 className="SearchMenu-title">Filtrar por recurso</h4>
      <ul className="SearchMenu-list">
        {items.map(item => (
          <li key={item.id} className="SearchMenu-item">
            <NavLink
              exact={item.exact || false}
              className="SearchMenu-link"
              activeClassName="SearchMenu-link--active"
              to={item.path}>
              <i className={`SearchMenu-icon icon-${item.icon}`} />
              {item.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchMenu;
