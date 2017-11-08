import React, { Component } from 'react';

function loadOrStop(isLoading, hasNextPage) {
  if (isLoading) return <h1>Loading...</h1>;
  if (!hasNextPage) {
    return <span className="Infinitescroll-message">No more results</span>;
  }
}

function InfiniteScroll(WrappedComponent) {
  class InfinitePager extends Component {
    componentDidMount() {
      window.addEventListener('scroll', this.onScroll, false);
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.onScroll, false);
    }

    onScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 300 &&
        this.props.items.length &&
        !this.props.isLoading &&
        this.props.hasNextPage
      ) {
        this.props.onPaginatedSearch();
      }
    };

    render() {
      const { items, isLoading, hasNextPage } = this.props;

      return (
        <div className="InfiniteScroll">
          <WrappedComponent {...this.props} items={items} />

          {loadOrStop(isLoading, hasNextPage)}
        </div>
      );
    }
  }

  return InfinitePager;
}

export default InfiniteScroll;
