import React from 'react';

import './index.css';

import defaultImage from './../../../../images/default_image.png';

const CommentBar = () => {
  const src = defaultImage;

  return (
    <div className="CommentBar">
      <div className="CommentBar-avatar imageContainer">
        <img src={src} alt="" className="CommentBar-image image" />
      </div>

      <form className="CommentBar-form">
        <input
          type="text"
          placeholder="Escribe un comentario"
          className="CommentBar-input"
        />
      </form>
    </div>
  );
};

export default CommentBar;
