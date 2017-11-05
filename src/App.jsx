import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Pages from './pages';
import Header from './shared/Header';

import store from './store';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <Pages />
        </div>
      </Provider>
    );
  }
}

export default App;
