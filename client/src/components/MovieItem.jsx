import React, { useState, useEffect } from 'react';

const MovieItem = ({ movie, clickWatched }) => {
  const handleClick = () => {
    clickWatched(movie.title, !movie.watched);
  }

  return (
    <div className="movieItem">
      <span className="movie">{movie.title}</span>
      <button id="watchedBtn" className="watched" onClick={handleClick}>Visto</button>
    </div>
  )
};

export default MovieItem;