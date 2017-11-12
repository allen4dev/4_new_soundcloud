import React from 'react';

import TrackList from './../../../../modules/tracks/components/TrackList';

import Info from './../Info';

import Recommendations from './../../../../shared/Recommendations';

import './index.css';

const Content = props => {
  return (
    <div className="TrackDetail-content">
      <Info {...props} />
      <Recommendations>
        <TrackList items={props.related} />
      </Recommendations>
    </div>
  );
};

export default Content;
