import React, { Component } from 'react';
import { connect } from 'react-redux';

import './index.css';

import defaultImage from './../../images/default_image.png';

// refactor: add the CID at time of fetch
const clientID = process.env.REACT_APP_SC_CLIENT_ID;

class Miniplayer extends Component {
  state = {
    paused: true,
    progress: '0%',
    volume: '0.5',
  };

  onPlay = () => {
    this.setState({
      paused: false,
    });
  };

  onEnded = () => {
    this.setState({
      paused: true,
      progress: '0%',
    });
  };

  onTimeUpdate = e => {
    const percent =
      e.currentTarget.currentTime * 100 / e.currentTarget.duration;
    const progress = `${percent}%`;

    this.setState({
      // currentTime: e.currentTarget.currentTime,
      progress,
    });
  };

  handleToggle = () => {
    if (this.audio.paused) {
      this.setState({ paused: false });

      this.audio.play();
    } else {
      this.setState({ paused: true });

      this.audio.pause();
    }
  };

  handleRangeChange = e => {
    this.audio.volume = e.target.value;

    this.setState({
      // [e.target.name]: e.target.value,
      volume: e.target.value,
    });
  };

  render() {
    const { track } = this.props;
    const src = track.artwork_url || defaultImage;
    const streamURL = `${track.stream_url}?client_id=${clientID}`;

    const icon = this.state.paused ? 'icon-play3' : 'icon-pause2';

    return (
      <div className="Miniplayer">
        <audio
          src={streamURL}
          ref={audio => {
            this.audio = audio;
          }}
          onPlay={this.onPlay}
          onEnded={this.onEnded}
          onTimeUpdate={this.onTimeUpdate}
          autoPlay
        />

        <div className="Miniplayer-buttonGroup">
          <button className="Miniplayer-button">
            <i className="Miniplayer-icon icon-backward2" />
          </button>
          <button className="Miniplayer-button" onClick={this.handleToggle}>
            <i className={`Miniplayer-icon ${icon}`} />
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
              style={{ flexBasis: this.state.progress }}
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

        <div className="Miniplayer-volume">
          <input
            className="Miniplayer-slider"
            type="range"
            name="volume"
            min="0"
            max="1"
            step="0.1"
            value={this.state.volume}
            onChange={this.handleRangeChange}
          />
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
