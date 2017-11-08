import React, { Component } from 'react';
import { connect } from 'react-redux';

import SetList from './../../../modules/playlists/components/SetList';

import search from './../../../modules/search';

class Playlists extends Component {
  componentDidMount() {
    const { items, query } = this.props;
    console.log('PLAYLIST QUERY:', query);

    if (items.length === 0) {
      this.fetchData(query);
    }
  }

  componentWillReceiveProps(nextProps) {
    const { query } = this.props;
    if (nextProps.query !== query) {
      console.log('FETCH NEW PLAYLISTS');
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
      </section>
    );
  }
}

function mapStateToProps(state) {
  const ids = state.search.playlists.results;

  return {
    query: state.search.query,
    items: ids.map(id => state.playlists.entities[id]),
  };
}

export default connect(mapStateToProps, {
  searchPlaylists: search.actions.searchPlaylists,
})(Playlists);
