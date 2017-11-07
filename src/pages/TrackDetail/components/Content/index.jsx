import React from 'react';

import Info from './../Info';

import Recommendations from './../../../../shared/Recommendations';

import './index.css';

const Content = () => {
  return (
    <div className="TrackDetail-content">
      <Info />
      <Recommendations />
    </div>
  );
};

export default Content;
