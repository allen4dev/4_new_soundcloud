import React, { Component } from 'react';
import { connect } from 'react-redux';

import search from './../../../modules/search';

import UserList from './../../../modules/users/components/UserList';

export class Users extends Component {
  componentDidMount() {
    const { items, query } = this.props;
    console.log('Users QUERY:', query);

    if (items.length === 0) {
      this.fetchData(query);
    }
  }

  componentWillReceiveProps(nextProps) {
    const { query } = this.props;
    if (nextProps.query !== query) {
      console.log('FETCH NEW USERS');
      this.fetchData(nextProps.query);
    }
  }

  fetchData = async query => {
    const { searchUsers } = this.props;

    await searchUsers(query);
  };

  render() {
    return (
      <section className="Users">
        <UserList items={this.props.items} />
      </section>
    );
  }
}

function mapStateToProps(state) {
  const ids = state.search.users.results;

  return {
    query: state.search.query,
    items: ids.map(id => state.users.entities[id]),
  };
}

export default connect(mapStateToProps, {
  searchUsers: search.actions.searchUsers,
})(Users);
