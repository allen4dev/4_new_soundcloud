import React from 'react';

import UserList from './../../../modules/users/components/UserList';

const Followings = () => {
  return (
    <div className="UserDetail-followings">
      <UserList items={new Array(12).fill({})} />
    </div>
  );
};

export default Followings;
