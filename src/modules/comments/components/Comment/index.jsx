import React from 'react';

import './index.css';

import defaultImage from './../../../../images/default_image.png';

const Comment = () => {
  const src = defaultImage;

  return (
    <li className="Comment">
      <div className="Comment-avatar imageContainer">
        <img src={src} alt="user avatar" className="Comment-image image" />
      </div>

      <div className="Comment-description">
        <div className="Comment-info">
          <span className="Comment-author">allen4dev</span>
          <span className="Comment-publishedAt">9 minutos</span>
        </div>
        <p className="Comment-body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
          sapiente repudiandae! Dignissimos, labore. Eum sunt commodi quod ipsa
          mollitia. Quidem ab debitis dolor blanditiis sit consequuntur earum
          modi doloremque consectetur!
        </p>
      </div>
    </li>
  );
};

export default Comment;
