import React from 'react';

import UserCard from './../../modules/users/components/UserCard';
import CommentList from './../../modules/comments/components/CommentList';

import './index.css';

const Feedback = () => {
  return (
    <section className="Feedback">
      <UserCard />
      <div className="Feedback-content">
        <div className="Feedback-itemInfo">
          <div className="Feedback-itemRelease">
            <h4 className="Feedback-itemTitle">Fecha de lanzamiento</h4>
            <p className="Feedback-text">15 Septiembre 2017</p>
          </div>

          <div className="Feedback-itemAnbout">
            <h4 className="Feedback-itemTitle">Linea de comunicacion</h4>
            <p className="Feedback-text">
              © 2017 Republic Records, a division of UMG Recording, Inc.
            </p>
          </div>
        </div>
        <CommentList items={new Array(12).fill({})} />
      </div>
    </section>
  );
};

export default Feedback;
