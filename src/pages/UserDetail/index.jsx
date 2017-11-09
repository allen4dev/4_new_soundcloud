import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserHeader from './../../modules/users/components/UserHeader';

import UserInfo from './components/UserInfo';

import Recommendations from './../../shared/Recommendations';

import users from './../../modules/users';

import './index.css';

class UserDetail extends Component {
  async componentDidMount() {
    const { user, fetchUser, match } = this.props;

    if (!user) {
      await fetchUser(match.params.id);
    }
  }

  render() {
    return (
      <div className="UserDetail page">
        <UserHeader {...this.props.user} />
        <div className="UserDetail-content">
          <UserInfo uid={this.props.match.params.id} />
          <Recommendations />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, { match }) {
  return {
    user: state.users.entities[match.params.id],
  };
}

export default connect(mapStateToProps, {
  fetchUser: users.actions.fetchUser,
})(UserDetail);
