import React, { Component } from 'react';
import { connect } from 'react-redux';

import TrackRowList from './../../../modules/tracks/components/TrackRowList';

import search from './../../../modules/search';

class Tracks extends Component {
  componentDidMount() {
    const { items, query } = this.props;
    console.log('TRACKS QUERY:', query);

    if (items.length === 0) {
      this.fetchData(query);
    }
  }

  fetchData = async query => {
    const { searchTracks } = this.props;

    await searchTracks(query);
  };

  render() {
    return (
      <section className="Tracks">
        <TrackRowList items={this.props.items} />
      </section>
    );
  }
}

function mapStateToProps(state) {
  const ids = state.search.tracks.results;

  return {
    query: state.search.query,
    items: ids.map(id => state.tracks.entities[id]),
  };
}

export default connect(mapStateToProps, {
  searchTracks: search.actions.searchTracks,
})(Tracks);
