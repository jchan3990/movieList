import React, { useState, useEffect } from 'react';
import axios from 'axios';

import MovieList from './MovieList.jsx';
import SearchBar from './SearchBar.jsx';
import AddBar from './AddBar.jsx';

var movies = [
  {title: 'Mean Girls', watched: true},
  {title: 'Hackers', watched: true},
  {title: 'The Grey', watched: true},
  {title: 'Sunshine', watched: true},
  {title: 'Ex Machina', watched: true},
];

const App = () => {
  const [movieList, setMovieList] = useState(movies);
  const [watchedList, setWatchedList] = useState([]);
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

  const onAdd = (title) => {
    let list = [...movieList];
    let capTitle = [];
    title = title.split(' ');

    for (let i = 0; i < title.length; i++) {
      let word = title[i];
      word = word.split('');
      word[0] = word[0].toUpperCase();
      capTitle.push(word.join(''));
    }

    list.push({
      title: capTitle.join(' '),
      watched: true,
    });
    setMovieList(list);
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
      <AddBar onAdd={onAdd} />
      <SearchBar onSearch={onSearch} />
      <MovieList movies={movieList} />
      {showAll()}
    </div>
  )
};

export default App;
