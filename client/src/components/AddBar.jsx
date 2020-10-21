import React, { useState } from 'react';

const AddBar = ({ onAdd }) => {
  const [movieTitle, setMovieTitle] = useState('');

  const addMovie = (e) => {
    e.preventDefault();
    if (movieTitle.length) onAdd(movieTitle);
    setMovieTitle('');
  }

  return (
    <form id="addBarContainer" onSubmit={addMovie} >
      <input id="addInput" type="text" name="title" placeholder="Agrega el título de la película aquí" onChange={(e) => setMovieTitle(e.target.value)} value={movieTitle} />
      <button className="AddBtn">Agregar</button>
    </form>
  )
};

export default AddBar;