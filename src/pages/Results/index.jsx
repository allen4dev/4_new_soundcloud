import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import Tracks from './containers/Tracks';
import Playlists from './containers/Playlists';
import Users from './containers/Users';

import './index.css';

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
        <div className="Menu" style={{ padding: '1em' }}>
          <NavLink
            className="Menu-link"
            activeClassName="Menu-link--active"
            to="/results/tracks">
            Go to Results Tracks
          </NavLink>
          <NavLink
            className="Menu-link"
            activeClassName="Menu-link--active"
            to="/results/playlists">
            Go to Results Playlists
          </NavLink>
          <NavLink
            className="Menu-link"
            activeClassName="Menu-link--active"
            to="/results/users">
            Go to Results Users
          </NavLink>
        </div>

        {this.renderRoutes()}
      </div>
    );
  }
}

export default Results;
