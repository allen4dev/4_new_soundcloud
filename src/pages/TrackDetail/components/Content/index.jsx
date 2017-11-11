import React from 'react';

import Info from './../Info';

import Recommendations from './../../../../shared/Recommendations';

import './index.css';

const Content = props => {
  return (
    <div className="TrackDetail-content">
      <Info {...props} />
      <Recommendations term={props.term} id={props.id} />
    </div>
  );
};

export default Content;
