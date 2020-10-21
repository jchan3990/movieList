import React, { useState, useEffect } from 'react';
import axios from 'axios';

import MovieList from './MovieList.jsx';
import SearchBar from './SearchBar.jsx';
import AddBar from './AddBar.jsx';
import ToWatchList from './ToWatchList.jsx';

var movies = [
  {title: 'Mean Girls', watched: true},
  {title: 'Hackers', watched: true},
  {title: 'The Grey', watched: false},
  {title: 'Sunshine', watched: false},
  {title: 'Ex Machina', watched: true},
];

const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [toWatchList, setToWatchList] = useState([]);
  const [searched, setSearched] = useState(false);
  const [watchedTab, setWatchedTab] = useState(true);

  useEffect(() => {
    getMovies();
  }, [])

  const getMovies = () => {
    let watched = [];
    let toWatch = [];
    movies.forEach(movie => {
      if (movie.watched) watched.push(movie);
      else toWatch.push(movie);
    })

    setMovieList(watched);
    setToWatchList(toWatch);
  }

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
      watched: false,
    });
    setMovieList(list);
  }

  const onShowAll = () => {
    setSearched(false);
    getMovies();
  }

  const showWatched = () => {
    if (watchedTab) return (<MovieList movies={movieList} />);
    else return (<ToWatchList movies={toWatchList} />)
  }

  const showAll = () => {
    if (searched) {
      return (<button className="showAll" onClick={onShowAll} >Mostrar Todo</button>)
    }
  }

  let watchedTabStyle = {backgroundColor: watchedTab ? "green" : "white"};
  let toWatchTabStyle = {backgroundColor: !watchedTab ? "green" : "white"};

  return (
    <div>
      <h1>El Cine del Mundo</h1>
      <AddBar onAdd={onAdd} />
      <SearchBar onSearch={onSearch} />
      <div className="watchedToWatchContainer">
        <div style={watchedTabStyle} className="watchedTab" onClick={() => setWatchedTab(true)} >Watched</div>
        <div style={toWatchTabStyle} className="toWatchTab" onClick={() => setWatchedTab(false)} >To Watch</div>
      </div>
      {/* <MovieList movies={movieList} /> */}
      {showWatched()}
      {showAll()}
    </div>
  )
};

export default App;
