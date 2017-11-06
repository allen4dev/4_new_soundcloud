import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

const FilterBox = ({ items }) => {
  return (
    <div className="FilterBox">
      <h4 className="FilterBox-title">Filtrar por etiqueta</h4>

      <div className="FilterBox-tags">
        <Link to="/anime" className="FilterBox-tag tag">
          Anime
        </Link>
        <Link to="/jpop" className="FilterBox-tag tag">
          J-Pop
        </Link>
        <Link to="/kpop" className="FilterBox-tag tag">
          K-Pop
        </Link>
        <Link to="/jrock" className="FilterBox-tag tag">
          J-Rock
        </Link>
        <Link to="/piano" className="FilterBox-tag tag">
          Piano
        </Link>
      </div>
    </div>
  );
};

export default FilterBox;
