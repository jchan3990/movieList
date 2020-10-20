import React from 'react';

import MovieItem from './MovieItem.jsx'

const MovieList = ({ movies }) => {
  return (
    <div className="movieListContainer">
      <ul>
        {movies.map((movie, idx) => (
          <MovieItem key={idx} movie={movie} />
        ))}
      </ul>
    </div>
  )
};

export default MovieList;