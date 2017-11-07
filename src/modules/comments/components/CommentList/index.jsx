import React from 'react';

import Comment from './../Comment';

import List from './../../../../shared/List';

import './index.css';

function renderComment(comment, i) {
  return <Comment key={i} {...comment} />;
}

const CommentList = ({ items }) => {
  return (
    <ul className="CommentList">
      <List items={items}>{renderComment}</List>
    </ul>
  );
};

export default CommentList;
