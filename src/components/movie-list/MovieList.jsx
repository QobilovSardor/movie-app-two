import React from 'react';
import MovieListItem from '../movie-list-item/MovieListItem';
import './movie-list.css'

const MovieList = ({data}) => {
  return (
    <ul className='movie-list'>
      {data.map(item => (
        <MovieListItem key={item.id} {...item}/>
      ))}
    </ul>
  );
};

export default MovieList;