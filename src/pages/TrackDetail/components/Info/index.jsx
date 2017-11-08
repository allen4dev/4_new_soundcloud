import React from 'react';

import CommentBar from './../../../../modules/comments/components/CommentBar';
import CommentList from './../../../../modules/comments/components/CommentList';

import Feedback from './../../../../shared/Feedback';

import './index.css';

const Info = props => {
  return (
    <div className="TrackDetail-info content">
      <CommentBar />
      <Feedback {...props}>
        <CommentList items={new Array(12).fill({})} />
      </Feedback>
    </div>
  );
};

export default Info;
