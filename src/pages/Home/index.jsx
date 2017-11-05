import React, { Component } from 'react';

import Explore from './components/Explore';
// Refactor: Duplicate JoinNow components name
import JoinNow from './components/JoinNow';

import Hero from './../../shared/Hero';
import PopularTracks from './../../shared/PopularTracks';

import './index.css';

export class Home extends Component {
  render() {
    return (
      <div className="Home page">
        <Hero />
        <PopularTracks />
        <Explore />
        <JoinNow />
      </div>
    );
  }
}

export default Home;
