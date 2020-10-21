import React, { useState, useEffect } from 'react';

const MovieItem = ({ movie, id }) => {
  const [watched, setWatched] = useState(movie.watched);

  const handleClick = () => {
    if (!watched) {
      setWatched(true);
    } else {
      setWatched(false);
    }
  }

  let classname = watched ? "watched" : "notWatched";

  return (
    <div className="movieItem">
      <span className="movie">{movie.title}</span>
      <button id="watchedBtn" className={classname} onClick={handleClick}>Watched</button>
    </div>
  )
};

export default MovieItem;