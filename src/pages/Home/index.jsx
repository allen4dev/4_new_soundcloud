import React, { Component } from 'react';
import { connect } from 'react-redux';

import Explore from './components/Explore';
// Refactor: Duplicate JoinNow components name
import JoinNow from './components/JoinNow';

import Hero from './../../shared/Hero';
import PopularTracks from './../../shared/PopularTracks';

import tracks from './../../modules/tracks';

import './index.css';

export class Home extends Component {
  async componentDidMount() {
    const { items, fetchPopularTracks } = this.props;

    if (items.length === 0) {
      await fetchPopularTracks();
    }
  }

  render() {
    return (
      <div className="Home page">
        <Hero />
        <PopularTracks items={this.props.items} />
        <Explore />
        <JoinNow />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const ids = state.tracks.popular;

  return {
    items: ids.map(id => state.tracks.entities[id]),
  };
}

export default connect(mapStateToProps, {
  fetchPopularTracks: tracks.actions.fetchPopularTracks,
})(Home);
