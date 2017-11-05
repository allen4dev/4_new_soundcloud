import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

const Navigation = () => {
  return (
    <nav className="Navigation">
      <Link to="/results" className="Navigation-link">
        Explora
      </Link>
      <Link to="/me" className="Navigation-link">
        Coleccion
      </Link>
    </nav>
  );
};

export default Navigation;
