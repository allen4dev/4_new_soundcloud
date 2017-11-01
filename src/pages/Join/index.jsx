import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import Signin from './components/Signin';
import Signup from './components/Signup';

import './index.css';

export class Join extends Component {
  render() {
    return (
      <div className="Join">
        <h1>Join</h1>

        <ul className="Menu">
          <li className="Menu-item">
            <NavLink style={{ margin: '.5em' }} to="/join/signin">
              Signin
            </NavLink>
            <NavLink style={{ margin: '.5em' }} to="/join/signup">
              Signup
            </NavLink>
          </li>
        </ul>

        <div className="Join-forms">
          <Route path="/join/signin" component={Signin} />
          <Route path="/join/signup" component={Signup} />
        </div>
      </div>
    );
  }
}

export default Join;
