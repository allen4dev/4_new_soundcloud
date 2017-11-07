import React, { Component } from 'react';

import UserHeader from './../../modules/users/components/UserHeader';

import UserInfo from './components/UserInfo';

import Recommendations from './../../shared/Recommendations';

import './index.css';

export class UserDetail extends Component {
  render() {
    return (
      <div className="UserDetail page">
        <UserHeader />
        <div className="UserDetail-content">
          <UserInfo uid={this.props.match.params.id} />
          <Recommendations />
        </div>
      </div>
    );
  }
}

export default UserDetail;
