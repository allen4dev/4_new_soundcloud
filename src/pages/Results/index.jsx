import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Tracks from './containers/Tracks';
import Playlists from './containers/Playlists';
import Users from './containers/Users';

import Menu from './../../shared/Menu';

import './index.css';

const items = [
  {
    id: 'menu-results-tracks',
    path: '/results/tracks',
    text: 'Tracks',
  },
  {
    id: 'menu-results-playlists',
    path: '/results/playlists',
    text: 'Playlists',
  },
  {
    id: 'menu-results-users',
    path: '/results/users',
    text: 'Users',
  },
];
export class Results extends Component {
  renderRoutes() {
    // const { match, query } = this.props;
    const { match } = this.props;

    if (!match.params.filter) {
      return <h2 className="message">Search something</h2>;
    }

    return (
      <div className="Results-content">
        <Route path="/results/tracks" component={Tracks} />
        <Route path="/results/playlists" component={Playlists} />
        <Route path="/results/users" component={Users} />
      </div>
    );
  }
  render() {
    return (
      <div className="Results">
        <Menu items={items} />

        {this.renderRoutes()}
      </div>
    );
  }
}

export default Results;
