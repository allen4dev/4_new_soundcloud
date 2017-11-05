import React from 'react';

import SearchMenu from './components/SearchMenu';
import FilterBox from './components/FilterBox';

const items = [
  {
    id: 'menu-results-tracks',
    path: '/results/tracks',
    text: 'Tracks',
  },
  {
    id: 'menu-results-playlists',
    path: '/results/playlists',
    text: 'Playlists',
  },
  {
    id: 'menu-results-users',
    path: '/results/users',
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
