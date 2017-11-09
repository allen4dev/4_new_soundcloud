import React, { Component } from 'react';

import './index.css';

import defaultImage from './../../images/default_image.png';

class Miniplayer extends Component {
  render() {
    const src = defaultImage;

    return (
      <div className="Miniplayer">
        <div className="Miniplayer-buttonGroup">
          <button className="Miniplayer-button">
            <i className="Miniplayer-icon icon-backward2" />
          </button>
          <button className="Miniplayer-button">
            <i className="Miniplayer-icon icon-play3" />
          </button>
          <button className="Miniplayer-button">
            <i className="Miniplayer-icon icon-forward3" />
          </button>
        </div>
        <div className="Miniplayer-content">
          <span className="Miniplayer-currentTime">0:47</span>
          <div className="Miniplayer-progress">
            <div
              className="Miniplayer-progressFilled"
              style={{ flexBasis: '10%' }}
            />
          </div>
          <span className="Miniplayer-totalTime">4:19</span>
        </div>
        <div className="Miniplayer-info ">
          <div className="Miniplayer-photo imageContainer">
            <img
              src={src}
              alt="track artwork_url"
              className="Miniplayer-image image"
            />
          </div>

          <div className="Miniplayer-description">
            <span className="Miniplayer-author">allen4dev</span>
            <span className="Miniplayer-title truncate">
              Monochrome Rainbow
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Miniplayer;
