import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchMenu from './components/SearchMenu';
import FilterBox from './components/FilterBox';

import search from './../../modules/search';

import './index.css';

const items = [
  {
    id: 'menu-results-tracks',
    path: '/results/tracks',
    icon: 'assistive-listening-systems',
    text: 'Tracks',
  },
  {
    id: 'menu-results-playlists',

    path: '/results/playlists',
    icon: 'list-alt',
    text: 'Playlists',
  },
  {
    id: 'menu-results-users',

    path: '/results/users',
    icon: 'users',
    text: 'Users',
  },
];

class Aside extends Component {
  handleClick = filter => {
    if (this.props.filter !== filter) {
      console.log('FILTER FROM ASIDE', filter);
      this.props.setFilter(filter);
    }
  };

  render() {
    return (
      <div className="Aside">
        <SearchMenu
          items={items}
          query={this.props.query}
          handleClick={this.handleClick}
        />
        <FilterBox />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    query: state.search.query,
    filter: state.search.filter,
  };
}

export default connect(mapStateToProps, {
  setFilter: search.actions.setFilter,
})(Aside);
