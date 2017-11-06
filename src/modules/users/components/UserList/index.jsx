import React from 'react';

import User from './../User';

import List from './../../../../shared/List';

import './index.css';

function renderUser(user, i) {
  return <User key={i} />;
}

const UserList = ({ items }) => {
  return (
    <div className="UserList">
      <List items={items}>{renderUser}</List>
    </div>
  );
};

export default UserList;
