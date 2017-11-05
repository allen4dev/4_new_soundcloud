import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

const Logo = () => {
  return (
    <div className="Logo">
      <Link className="Logo-link" to="/">
        <i className="Logo-icon icon-soundcloud" />
      </Link>
    </div>
  );
};

export default Logo;
