import React from 'react';

import SearchMenu from './components/SearchMenu';
import FilterBox from './components/FilterBox';

import './index.css';

const items = [
  {
    id: 'menu-results-tracks',
    path: '/results/tracks',
    icon: 'assistive-listening-systems',
    text: 'Tracks',
  },
  {
    id: 'menu-results-playlists',
    path: '/results/playlists',
    icon: 'list-alt',
    text: 'Playlists',
  },
  {
    id: 'menu-results-users',
    path: '/results/users',
    icon: 'users',
    text: 'Users',
  },
];

const Aside = () => {
  return (
    <div className="Aside">
      <SearchMenu items={items} />
      <FilterBox />
    </div>
  );
};

export default Aside;
