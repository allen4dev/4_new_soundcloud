import React, { Component } from 'react';

import Logo from './../Logo';
import Navigation from './../Navigation';
import Searchbar from './../Searchbar';

import Buttons from './components/Buttons';

import './index.css';

class Header extends Component {
  renderActions() {
    // if user is authenticated
    // render UserActions component
    return <Buttons />;
  }

  render() {
    return (
      <header className="Header">
        <Logo />
        <Navigation />
        <Searchbar />
        {this.renderActions()}
      </header>
    );
  }
}

export default Header;
