import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserList from './../../../modules/users/components/UserList';

import InfiniteScroll from './../../../HOC/InfinityScroll';

import search from './../../../modules/search';

const InfiniteUsers = InfiniteScroll(UserList);

export class Users extends Component {
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
    const { searchUsers } = this.props;

    await searchUsers(query);
  };

  searchNextUsers = async () => {
    const { searchUsersNextPage } = this.props;

    await searchUsersNextPage();
  };

  render() {
    return (
      <section className="Users">
        <InfiniteUsers
          items={this.props.items}
          isLoading={this.props.isFetching}
          hasNextPage={this.props.hasNextPage}
          onPaginatedSearch={this.searchNextUsers}
        />
      </section>
    );
  }
}

function mapStateToProps(state) {
  const ids = state.search.users.results;
  const isFetching = state.search.users.fetching;
  const hasNextPage = state.search.users.nextPage ? true : false;

  return {
    hasNextPage,
    isFetching,
    query: state.search.query,
    items: ids.map(id => state.users.entities[id]),
  };
}

export default connect(mapStateToProps, {
  searchUsers: search.actions.searchUsers,
  searchUsersNextPage: search.actions.searchUsersNextPage,
})(Users);
