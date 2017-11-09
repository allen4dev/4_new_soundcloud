import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

import defaultImage from './../../images/default_image.png';

const ItemHeader = props => {
  const src = props.artwork_url || defaultImage;

  return (
    <header className="ItemHeader">
      <div className="ItemHeader-content">
        <div className="ItemHeader-info">
          <div className="ItemHeader-actions">
            <button className="ItemHeader-play btn btn-play">
              <i className="ItemHeader-icon icon-play3" />
            </button>

            <div className="ItemHeader-details">
              <Link
                to={`/users/${props.user.id}/favorited`}
                className="ItemHeader-author styledTag">
                {props.user.username}
              </Link>
              <span className="ItemHeader-title styledTag">{props.title}</span>
            </div>
          </div>

          <span className="ItemHeader-date">{props.created_at}</span>
        </div>
        <div className="ItemHeader-children">{props.children}</div>
      </div>

      <div className="ItemHeader-photo imageContainer">
        <img src={src} alt={props.title} className="ItemHeader-image image" />
      </div>
    </header>
  );
};

export default ItemHeader;
