import React from 'react';

import './index.css';

const Searchbar = ({ placeholder, value, handleChange, handleSubmit }) => {
  return (
    <form className="Searchbar" onSubmit={handleSubmit}>
      <input
        className="Searchbar-input"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </form>
  );
};

export default Searchbar;
