import React, { Component } from 'react';

import Explore from './components/Explore';
// Refactor: Duplicate Join components name
import Join from './components/Join';

import Hero from './../../shared/Hero';
import PopularTracks from './../../shared/PopularTracks';

import './index.css';

export class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Hero />
        <PopularTracks />
        <Explore />
        <Join />
      </div>
    );
  }
}

export default Home;
