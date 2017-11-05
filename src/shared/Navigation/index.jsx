import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

const Navigation = () => {
  return (
    <nav className="Navigation">
      <Link to="/" className="Navigation-link">
        Signin
      </Link>
      <Link to="/" className="Navigation-link">
        Signup
      </Link>
    </nav>
  );
};

export default Navigation;
