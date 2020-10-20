import React, { useState, useEffect } from 'react';

const MovieItem = ({ movie }) => {
  return (
    <div className="movieItem">
      <span className="movie">{movie.title}</span>
    </div>
  )
};

export default MovieItem;