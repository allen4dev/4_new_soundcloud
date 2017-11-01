import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Signin from './components/Signin';
import Signup from './components/Signup';

import Menu from './../../shared/Menu';

import './index.css';

const items = [
  {
    id: 'menu-join-signin',
    path: '/join/signin',
    text: 'Signin',
  },
  {
    id: 'menu-join-signup',
    path: '/join/signup',
    text: 'Signup',
  },
];

export class Join extends Component {
  render() {
    return (
      <div className="Join">
        <h1>Join</h1>

        <Menu items={items} />

        <div className="Join-forms">
          <Route path="/join/signin" component={Signin} />
          <Route path="/join/signup" component={Signup} />
        </div>
      </div>
    );
  }
}

export default Join;
