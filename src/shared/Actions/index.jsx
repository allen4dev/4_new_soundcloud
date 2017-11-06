import React from 'react';

import './index.css';

const Actions = () => {
  return (
    <div className="Action">
      <button className="Action-button btn btn-flat">
        <i className="Action-icon icon-heart-o" /> 723
      </button>
      <button className="Action-button btn btn-flat">
        <i className="Action-icon icon-share" /> 142
      </button>
      <button className="Action-button btn btn-flat">
        <i className="Action-icon icon-share2" /> 42
      </button>
      <button className="Action-button btn btn-flat">
        <i className="Action-icon icon-plus" /> More
      </button>
    </div>
  );
};

export default Actions;
