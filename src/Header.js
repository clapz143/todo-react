import React from 'react';

const Header = ({ handleSortChange, handleFilterChange }) => {
  return (
    <header>
      <h1>Task List</h1>
      <div className="sort-filter-buttons">
        <button onClick={() => handleSortChange('input')}><strong>Sort by input</strong></button>
        <button onClick={() => handleSortChange('names')}><strong>Sort by names (Z-A)</strong></button>
        {/* <button onClick={() => handleFilterChange('completed')}><strong>Show completed tasks</strong></button>
        <button onClick={() => handleFilterChange('incomplete')}><strong>Show incomplete tasks</strong></button> */}
      </div>
    </header>
  );
}

export default Header;
