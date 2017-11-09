import React from 'react';
import { Route } from 'react-router-dom';

import Overview from './containers/Overview';
import Tracks from './containers/Tracks';
import Playlists from './containers/Playlists';
import Followers from './containers/Followers';
import History from './containers/History';

import Menu from './../../shared/Menu';

import './index.css';

const items = [
  {
    id: 'menu-collections-overview',
    path: '/me',
    text: 'Resumen',
    exact: true,
  },
  {
    id: 'menu-collections-tracks',
    path: '/me/tracks',
    text: 'Pistas',
  },
  {
    id: 'menu-collections-playlists',
    path: '/me/playlists',
    text: 'Listas',
  },
  {
    id: 'menu-collections-followers',
    path: '/me/followers',
    text: 'Seguidores',
  },
  {
    id: 'menu-collections-history',
    path: '/me/history',
    text: 'Historial',
  },
];

const Collection = () => {
  return (
    <div className="Collection page">
      <Menu items={items} />

      <div className="Collection-content">
        <Route exact path="/me" component={Overview} />
        <Route path="/me/tracks" component={Tracks} />
        <Route path="/me/playlists" component={Playlists} />
        <Route path="/me/followers" component={Followers} />
        <Route path="/me/history" component={History} />
      </div>
    </div>
  );
};

export default Collection;
