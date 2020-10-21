import React from 'react';

import MovieItem from './MovieItem.jsx'

const MovieList = ({ movies, handleWatched }) => {
  const clickWatched = (title, status) => {
    handleWatched(title, status);
  }

  return (
    <div className="movieListContainer">
      <ul>
        {movies.map((movie, idx) => (
          <MovieItem key={idx} movie={movie} clickWatched={clickWatched} />
        ))}
      </ul>
    </div>
  )
};

export default MovieList;