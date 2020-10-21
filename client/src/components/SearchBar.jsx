import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [title, setTitle] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (title.length) onSearch(title);
    resetSearch();
  }

  const resetSearch = () => {
    setTitle('');
    document.getElementById('searchContainer').reset();
  }

  return (
    <form id="searchContainer" onSubmit={onSubmit} >
      <input id="searchInput" type="search" name="title" placeholder="Buscar..." onChange={(e) => setTitle(e.target.value)} />
      <button>¡Vamos!</button>
    </form>
  )
};

export default SearchBar;