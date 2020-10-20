import React, { useState, useEffect } from 'react';
import axios from 'axios';

import MovieList from './MovieList.jsx';
import SearchBar from './SearchBar.jsx';

var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

const App = () => {
  const [movieList, setMovieList] = useState(movies);
  const [searched, setSearched] = useState(false);

  const onSearch = (search) => {
    let searchList = [];
    movieList.forEach(movie => {
      if (movie.title.toLowerCase().indexOf(search.toLowerCase()) !== -1) searchList.push(movie);
    })

    setSearched(true);

    if (searchList.length) setMovieList(searchList);
    else setMovieList([]);
  }

  const onShowAll = () => {
    setSearched(false);
    setMovieList(movies);
  }


  const showAll = () => {
    if (searched) {
      return (<button className="showAll" onClick={onShowAll} >Mostrar Todo</button>)
    }
  }

  return (
    <div>
      <h1>El Cine del Mundo</h1>
      <SearchBar onSearch={onSearch} />
      <MovieList movies={movieList} />
      {showAll()}
    </div>
  )
};

export default App;
