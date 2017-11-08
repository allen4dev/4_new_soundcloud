import React from 'react';

import Comment from './../Comment';

import List from './../../../../shared/List';

import './index.css';

function renderComment(comment) {
  return <Comment key={comment.id} {...comment} />;
}

const CommentList = ({ items }) => {
  return (
    <ul className="CommentList">
      <List items={items}>{renderComment}</List>
    </ul>
  );
};

export default CommentList;
