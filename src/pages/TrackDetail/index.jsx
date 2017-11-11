import React, { Component } from 'react';
import { connect } from 'react-redux';

import Content from './components/Content';

import ItemHeader from './../../shared/ItemHeader';

import tracks from './../../modules/tracks';

import './index.css';

class TrackDetail extends Component {
  state = {
    loading: true,
  };

  async componentDidMount() {
    const { track, comments, match } = this.props;

    if (!track) {
      await this.fetchData();
    }

    if (comments.length === 0) {
      this.setState({ loading: true });

      await this.props.fetchTrackComments(match.params.id);
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

        <Content
          info={info}
          comments={this.props.comments}
          term={track.title}
          id={track.id}
        />
      </section>
    );
  }
}

function mapStateToProps(state, { match }) {
  const id = match.params.id;
  const commentIds = state.tracks.comments.byId[id] || [];

  return {
    track: state.tracks.entities[id],
    comments: commentIds.map(id => state.comments.entities[id]),
  };
}

export default connect(mapStateToProps, {
  fetchTrack: tracks.actions.fetchTrack,
  fetchTrackComments: tracks.actions.fetchTrackComments,
})(TrackDetail);
