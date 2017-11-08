import React from 'react';

import { NavLink } from 'react-router-dom';

import './index.css';

// Refactor: Copy paste from Menu
const SearchMenu = ({ items, query, handleClick }) => {
  return (
    <div className="SearchMenu">
      <h4 className="SearchMenu-title">Filtrar por recurso</h4>
      <ul className="SearchMenu-list">
        {items.map(item => (
          <li
            key={item.id}
            className="SearchMenu-item"
            onClick={() => handleClick(item.text.toLowerCase())}>
            <NavLink
              exact={item.exact || false}
              className="SearchMenu-link"
              activeClassName="SearchMenu-link--active"
              to={{
                pathname: item.path,
                search: `q=${query}`,
              }}>
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
