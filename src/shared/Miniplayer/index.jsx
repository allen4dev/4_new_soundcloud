import React, { Component } from 'react';
import { connect } from 'react-redux';

import './index.css';

import defaultImage from './../../images/default_image.png';

class Miniplayer extends Component {
  render() {
    const { track } = this.props;
    const src = track.artwork_url || defaultImage;

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
          <span className="Miniplayer-currentTime">0:00</span>
          <div className="Miniplayer-progress">
            <div
              className="Miniplayer-progressFilled"
              style={{ flexBasis: '10%' }}
            />
          </div>
          <span className="Miniplayer-totalTime">{track.duration}</span>
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
            <span className="Miniplayer-author">{track.user.username}</span>
            <span className="Miniplayer-title truncate">{track.title}</span>
          </div>
        </div>
      </div>
    );
  }
}

Miniplayer.defaultProps = {
  track: {
    artwork_url: defaultImage,
    user: {
      username: '',
    },
  },
};

function mapStateToProps(state) {
  const currentTrack = state.tracks.currentTrack;

  return {
    track: state.tracks.entities[currentTrack],
  };
}

export default connect(mapStateToProps)(Miniplayer);
