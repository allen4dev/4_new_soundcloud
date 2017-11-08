import React from 'react';

import UserCard from './../../modules/users/components/UserCard';

import './index.css';

const Feedback = props => {
  return (
    <section className="Feedback">
      <UserCard />
      <div className="Feedback-content">
        <div className="Feedback-itemInfo">
          <div className="Feedback-itemBox">
            <h4 className="Feedback-itemTitle">Fecha de lanzamiento</h4>
            <p className="Feedback-text">{props.createdAt}</p>
          </div>

          <div className="Feedback-itemBox">
            <h4 className="Feedback-itemTitle">Comprar</h4>
            <p className="Feedback-text">
              {props.purchaseUrl || 'no link provided'}
            </p>
          </div>
        </div>

        <div className="Feedback-children">{props.children}</div>
      </div>
    </section>
  );
};

export default Feedback;
