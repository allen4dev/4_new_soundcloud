import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

const Buttons = () => {
  return (
    <div className="Header-buttons">
      <Link to="/join/signin" className="Header-button btn">
        Signin
      </Link>
      <Link to="/join/signup" className="Header-button btn">
        Signup
      </Link>
    </div>
  );
};

export default Buttons;
