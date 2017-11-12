import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserHeader from './../../modules/users/components/UserHeader';
// import UserRowList from './../../modules/users/components/UserRowList';

import UserInfo from './components/UserInfo';

import Recommendations from './../../shared/Recommendations';

import users from './../../modules/users';

import './index.css';

class UserDetail extends Component {
  async componentDidMount() {
    const { related, fetchUser, fetchRelatedUsers, match } = this.props;
    let { user } = this.props;

    if (!user) {
      user = await fetchUser(match.params.id);
    }

    if (related.length === 0) {
      await fetchRelatedUsers(match.params.id, user.username);
    }
  }

  render() {
    return (
      <div className="UserDetail page">
        <UserHeader {...this.props.user} />
        <div className="UserDetail-content">
          <UserInfo uid={this.props.match.params.id} />
          <Recommendations>
            <span>Put a UserRowList here</span>
          </Recommendations>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, { match }) {
  const relatedIds = state.users.related[match.params.id] || [];

  return {
    user: state.users.entities[match.params.id],
    related: relatedIds.map(id => state.users.entities[id]),
  };
}

export default connect(mapStateToProps, {
  fetchUser: users.actions.fetchUser,
  fetchRelatedUsers: users.actions.fetchRelatedUsers,
})(UserDetail);
