import React, { Component } from 'react';
import { connect } from 'react-redux';

import SetList from './../../../modules/playlists/components/SetList';

import search from './../../../modules/search';

class Playlists extends Component {
  componentDidMount() {
    const { items, query, isFetching } = this.props;

    if (items.length === 0 && !isFetching) {
      this.fetchData(query);
    }
  }

  componentWillReceiveProps(nextProps) {
    const { query } = this.props;
    if (nextProps.query !== query) {
      this.fetchData(nextProps.query);
    }
  }

  fetchData = async query => {
    const { searchPlaylists } = this.props;

    await searchPlaylists(query);
  };

  render() {
    return (
      <section className="Playlists">
        <SetList items={this.props.items} />
        {this.props.isFetching && <h1>Loading...</h1>}
      </section>
    );
  }
}

function mapStateToProps(state) {
  const ids = state.search.playlists.results;
  const isFetching = state.search.playlists.fetching;

  return {
    isFetching,
    query: state.search.query,
    items: ids.map(id => state.playlists.entities[id]),
  };
}

export default connect(mapStateToProps, {
  searchPlaylists: search.actions.searchPlaylists,
})(Playlists);
