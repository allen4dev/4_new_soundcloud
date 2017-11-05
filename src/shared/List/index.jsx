import React from 'react';

const List = ({ items, children }) => {
  return <ul className="List">{items.map(children)}</ul>;
};

export default List;
