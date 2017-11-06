import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Tracks from './containers/Tracks';
import Playlists from './containers/Playlists';
import Users from './containers/Users';

import Aside from './../../shared/Aside';

import './index.css';

export class Results extends Component {
  renderRoutes() {
    // const { match, query } = this.props;
    const { match } = this.props;

    if (!match.params.filter) {
      return (
        <div className="Results-content">
          <h2 className="message">Search something</h2>
        </div>
      );
    }

    return (
      <div className="Results-content">
        <h2 className="Results-title">Resultados de busqueda para: "Anime"</h2>
        <Route path="/results/tracks" component={Tracks} />
        <Route path="/results/playlists" component={Playlists} />
        <Route path="/results/users" component={Users} />
      </div>
    );
  }
  render() {
    return (
      <div className="Results page">
        <Aside />

        {this.renderRoutes()}
      </div>
    );
  }
}

export default Results;
