import React, { Component } from 'react';
import { connect } from 'react-redux';

import ItemHeader from './../../shared/ItemHeader';

import Content from './components/Content';

import tracks from './../../modules/tracks';
import users from './../../modules/users';

import './index.css';

class TrackDetail extends Component {
  state = {
    loading: true,
  };

  async componentDidMount() {
    const { track } = this.props;
    if (!track) {
      await this.fetchData();
    }
    this.setState({ loading: false });
  }

  fetchData = async () => {
    const { fetchTrack, match: { params } } = this.props;

    this.setState({ loading: true });
    return fetchTrack(params.id);
  };

  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>;
    }

    const { purchase_url, created_at, ...track } = this.props.track;
    const info = { purchase_url, created_at };

    return (
      <section className="TrackDetail page">
        <ItemHeader {...track} created_at={created_at}>
          <div className="Progress">
            <div className="Progress-filled">Put progress here</div>
          </div>
        </ItemHeader>
        <Content info={info} />
      </section>
    );
  }
}

function mapStateToProps(state, { match }) {
  const id = match.params.id;

  return {
    track: state.tracks.entities[id],
  };
}

export default connect(mapStateToProps, {
  fetchTrack: tracks.actions.fetchTrack,
  fetchUser: users.actions.fetchUser,
})(TrackDetail);
