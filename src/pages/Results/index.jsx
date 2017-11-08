import React from 'react';

import { Route } from 'react-router-dom';

import Tracks from './containers/Tracks';
import Playlists from './containers/Playlists';
import Users from './containers/Users';

import Aside from './../../shared/Aside';

import './index.css';

const Results = ({ match }) => {
  function renderRoutes() {
    if (!match.params.filter) {
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

  return (
    <div className="Results page">
      <Aside />

      {renderRoutes()}
    </div>
  );
};

export default Results;
