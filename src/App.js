import React, { useState } from 'react';
import { moviesData } from './components/MovieData';
import SearchMovie from './components/SearchMovie/SearchMovie';
import MoviesList from './components/MovieList';
import AddMovie from './components/AddMovie/AddMovie';
import Trailer from './components/trailer';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [moviesList, setMoviesList] = useState(moviesData);
  const [nameSearch, setNameSearch] = useState('');
  const [ratingSearch, setRatingSearch] = useState(1);

  const addNewMovie = (e, newMovie) => {
    e.preventDefault();
    setMoviesList([...moviesList, newMovie]);
  };

  return (
    <Router>
    <div className="App">
      <h1 className='titre'>MOVIE APP</h1>
      
      <SearchMovie
        setNameSearch={setNameSearch}
        ratingSearch={ratingSearch}
        setRatingSearch={setRatingSearch}
      />
      
     <Route path="/" exact>
      <MoviesList
        moviesList={moviesList}
        nameSearch={nameSearch}
        ratingSearch={ratingSearch}
      />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <AddMovie addNewMovie={addNewMovie} />
      </div>
</Route>
      <Route path='/trailer/:name'>
      <Trailer moviesList={moviesList}/>
      </Route>
    
      
    </div>
    </Router>
  );
}

export default App;


