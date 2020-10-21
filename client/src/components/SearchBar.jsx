import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [title, setTitle] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (title.length) onSearch(title);
    setTitle('');
  }

  return (
    <form id="searchContainer" onSubmit={onSubmit} >
      <input id="searchInput" type="search" name="title" placeholder="Buscar..." onChange={(e) => setTitle(e.target.value)} value={title} />
      <button>¡Vamos!</button>
    </form>
  )
};

export default SearchBar;