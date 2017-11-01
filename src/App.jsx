import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Link } from 'react-router-dom';

import Pages from './pages';

import store from './store';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <nav>
            <Link style={{ padding: '.5em' }} to="/">
              Go to Home
            </Link>
            <Link style={{ padding: '.5em' }} to="/results">
              Go to Results
            </Link>
            <Link style={{ padding: '.5em' }} to="/tracks/123">
              Go to Track 123
            </Link>
            <Link style={{ padding: '.5em' }} to="/playlists/123">
              Go to Playlist 123
            </Link>
            <Link style={{ padding: '.5em' }} to="/users/123">
              Go to User 123
            </Link>
            <Link style={{ padding: '.5em' }} to="/join/signin">
              Go to Signin/Signup
            </Link>
            <Link style={{ padding: '.5em' }} to="/me">
              Go to Collection
            </Link>
            <Link style={{ padding: '.5em' }} to="/me/edit">
              Go to UserForm
            </Link>
            <Link style={{ padding: '.5em' }} to="/random">
              Go to Error404
            </Link>
          </nav>

          <Pages />
        </div>
      </Provider>
    );
  }
}

export default App;
