import React from 'react';

import ToWatchItem from './ToWatchItem.jsx';

const ToWatchList = ({ movies, handleWatched }) => {
  const clickWatched = (title, status) => {
    handleWatched(title, status);
  }

  return (
    <div className="movieListContainer">
      <ul>
        {movies.map((movie, idx) => (
          <ToWatchItem key={idx} movie={movie} clickWatched={clickWatched} />
        ))}
      </ul>
    </div>
  )
};

export default ToWatchList;