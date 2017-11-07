import React, { Component } from 'react';

import ItemHeader from './../../shared/ItemHeader';

import Content from './components/Content';

import './index.css';

export class TrackDetail extends Component {
  render() {
    return (
      <section className="TrackDetail page">
        <ItemHeader>
          <div className="Progress">
            <div className="Progress-filled">Put progress here</div>
          </div>
        </ItemHeader>
        <Content />
      </section>
    );
  }
}

export default TrackDetail;
