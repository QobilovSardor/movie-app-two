import React from 'react';
import MovieListItem from '../movie-list-item/MovieListItem';
import './movie-list.css'

const MovieList = ({data, onDeleted}) => {
  return (
    <ul className='movie-list'>
      {data.map(item => (
        <MovieListItem key={item.id} {...item} onDeleted={onDeleted}/>
      ))}
    </ul>
  );
};

export default MovieList;