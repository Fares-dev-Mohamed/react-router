import React from 'react';
import MovieCard from '../components/MovieCard/MovieCard'

const MoviesList =({moviesList, nameSearch, ratingSearch})=>{
    return (
        <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap',
        }}
    >
      {moviesList
        .filter(
          (el) =>
            el.name.toLowerCase().includes(nameSearch.toLowerCase().trim()) &&
            el.rating >= ratingSearch
        )
        .map((el, i) => (
          <MovieCard key={i} movie={el} />
        ))}
    </div>
    )
}
export default MoviesList;