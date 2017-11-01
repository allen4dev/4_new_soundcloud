import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Pages from './pages';
class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/">Go to Home</Link>
          <Link to="/results">Go to Results</Link>
          <Link to="/tracks/123">Go to Track 123</Link>
          <Link to="/playlists/123">Go to Playlist 123</Link>
          <Link to="/users/123">Go to User 123</Link>
          <Link to="/join">Go to Signin/Signup</Link>
          <Link to="/me">Go to Collection</Link>
          <Link to="/me/edit">Go to UserForm</Link>
          <Link to="/random">Go to Error404</Link>
        </nav>
        <Pages />
      </div>
    );
  }
}

export default App;
