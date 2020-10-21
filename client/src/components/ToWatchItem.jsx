import React, { useState } from 'react';

const ToWatchItem = ({ movie, clickWatched }) => {
  const handleClick = () => {
    clickWatched(movie.title, !movie.watched);
  }

  return (
    <div className="movieItem">
      <span className="movie">{movie.title}</span>
      <button id="toWatchBtn" className="notWatched" onClick={handleClick}>Visto</button>
    </div>
  )
};

export default ToWatchItem;