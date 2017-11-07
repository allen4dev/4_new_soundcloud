import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

import defaultImage from './../../images/default_image.png';

const ItemHeader = ({ children }) => {
  const src = defaultImage;

  return (
    <header className="ItemHeader">
      <div className="ItemHeader-content">
        <div className="ItemHeader-info">
          <div className="ItemHeader-actions">
            <button className="ItemHeader-play btn btn-play">
              <i className="ItemHeader-icon icon-play3" />
            </button>

            <div className="ItemHeader-details">
              <Link to="/users/123" className="ItemHeader-author styledTag">
                allen4dev
              </Link>
              <span className="ItemHeader-title styledTag">Brave Shine</span>
            </div>
          </div>

          <span className="ItemHeader-date">4 años</span>
        </div>
        <div className="ItemHeader-children">{children}</div>
      </div>

      <div className="ItemHeader-photo imageContainer">
        <img src={src} alt="" className="ItemHeader-image image" />
      </div>
    </header>
  );
};

export default ItemHeader;
