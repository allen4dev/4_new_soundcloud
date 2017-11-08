import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Logo from './../Logo';
import Navigation from './../Navigation';
import Searchbar from './../Searchbar';

import Buttons from './components/Buttons';

import search from './../../modules/search';

import './index.css';

class Header extends Component {
  state = {
    value: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const { query, history, match } = this.props;
    const term = this.state.value;
    const filter = match.params.filter || 'tracks';

    console.log(match);

    if (query !== term) {
      this.props.setQuery(term);

      history.push({
        pathname: `/results/${filter}`,
        search: `q=${term}`,
      });
    }

    this.setState({ value: '' });
  };

  handleChange = e => {
    const value = e.target.value;

    this.setState({ value });
  };

  renderActions() {
    // if user is authenticated
    // render UserActions component
    return <Buttons />;
  }

  render() {
    return (
      <header className="Header">
        <Logo />
        <Navigation />
        <Searchbar
          placeholder="Search..."
          value={this.state.value}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />

        {this.renderActions()}
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    query: state.search.query,
  };
}

export default withRouter(
  connect(mapStateToProps, {
    setQuery: search.actions.setQuery,
  })(Header)
);
