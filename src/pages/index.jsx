import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Results from './Results';
import TrackDetail from './TrackDetail';
import PlaylistDetail from './PlaylistDetail';
import UserDetail from './UserDetail';
import Collection from './Collection';
import Join from './Join';
import UserForm from './UserForm';
import Error404 from './Error404';

const Pages = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/results/:filter?" component={Results} />
      <Route path="/tracks/:id" component={TrackDetail} />
      <Route path="/playlists/:id" component={PlaylistDetail} />
      <Route path="/users/:id" component={UserDetail} />
      <Route path="/join/:filter?" component={Join} />
      <Route exact path="/me/:filter?" component={Collection} />
      <Route path="/me/edit" component={UserForm} />
      <Route component={Error404} />
    </Switch>
  );
};

export default Pages;
