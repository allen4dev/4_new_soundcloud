import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Tracks from './../../containers/Tracks';
import Playlists from './../../containers/Playlists';
import Followings from './../../containers/Followings';

import Menu from './../../../../shared/Menu';

import './index.css';

class UserInfo extends Component {
  renderRoutes() {
    const { uid } = this.props;

    return (
      <div className="UserInfo-content">
        <Route path={`/users/${uid}/favorited`} component={Tracks} />
        <Route path={`/users/${uid}/playlists`} component={Playlists} />
        <Route path={`/users/${uid}/followings`} component={Followings} />
      </div>
    );
  }

  renderMenu() {
    const { uid } = this.props;

    const items = [
      {
        id: 'menu-userdetail-favorited',
        path: `/users/${uid}/favorited`,
        text: 'Pistas',
        exact: true,
      },
      {
        id: 'menu-userInfo-playlists',
        path: `/users/${uid}/playlists`,
        text: 'Listas',
      },
      {
        id: 'menu-userdetail-followings',
        path: `/users/${uid}/followings`,
        text: 'Siguiendo',
      },
    ];

    return <Menu items={items} />;
  }

  render() {
    return (
      <div className="UserInfo">
        <div className="UserInfo-header">{this.renderMenu()}</div>
        {this.renderRoutes()}
      </div>
    );
  }
}

export default UserInfo;
