import React from 'react';

import UserCard from './../../modules/users/components/UserCard';

import './index.css';

const Feedback = ({ info, children }) => {
  return (
    <section className="Feedback">
      <UserCard />
      <div className="Feedback-content">
        <div className="Feedback-itemInfo">
          <div className="Feedback-itemBox">
            <h4 className="Feedback-itemTitle">Fecha de lanzamiento</h4>
            <p className="Feedback-text">{info.created_at}</p>
          </div>

          <div className="Feedback-itemBox">
            <h4 className="Feedback-itemTitle">Comprar</h4>
            <p className="Feedback-text">
              {info.purchase_url || 'no link provided'}
            </p>
          </div>
        </div>

        <div className="Feedback-children">{children}</div>
      </div>
    </section>
  );
};

export default Feedback;
