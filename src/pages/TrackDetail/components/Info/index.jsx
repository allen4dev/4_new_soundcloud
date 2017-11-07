import React from 'react';

import CommentBar from './../../../../modules/comments/components/CommentBar';

import Feedback from './../../../../shared/Feedback';

import './index.css';

const Info = () => {
  return (
    <div className="TrackDetail-info content">
      <CommentBar />
      <Feedback />
    </div>
  );
};

export default Info;
