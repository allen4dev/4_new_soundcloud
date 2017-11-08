import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Route } from 'react-router-dom';

import Tracks from './containers/Tracks';
import Playlists from './containers/Playlists';
import Users from './containers/Users';

import Aside from './../../shared/Aside';

import search from './../../modules/search';

import helpers from './../../utils/helpers';

import './index.css';

class Results extends Component {
  componentDidMount() {
    const { location: { search }, setQuery } = this.props;

    const normalized = helpers.normalizeQuery(search);

    if (normalized) {
      setQuery(normalized);
    }
  }

  renderRoutes() {
    if (!this.props.match.params.filter) {
      return (
        <div className="Results-content">
          <h2 className="Results-message">Search something</h2>
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

export default connect(null, {
  setQuery: search.actions.setQuery,
})(Results);
