import React from 'react';

function Filter({ search, onSearchChange }) {
  return (
    <input
      type="text"
      value={search}
      onChange={(e) => onSearchChange(e.target.value)}
      placeholder="Search items..."
    />
  );
}

export default Filter;
