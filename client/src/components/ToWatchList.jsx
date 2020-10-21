import React from 'react';

import ToWatchItem from './ToWatchItem.jsx';

const ToWatchList = ({ movies }) => {
  return (
    <div className="movieListContainer">
      <ul>
        {movies.map((movie, idx) => (
          <ToWatchItem key={idx} id={idx} movie={movie} />
        ))}
      </ul>
    </div>
  )
};

export default ToWatchList;