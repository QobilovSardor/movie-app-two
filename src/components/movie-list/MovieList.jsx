import React from 'react';
import MovieListItem from '../movie-list-item/MovieListItem';
import './movie-list.css'

const MovieList = ({ data, onDeleted, onToggleProp }) => {
  return (
    <ul className='movie-list'>
      {data.map(item => (
        <MovieListItem  
          key={item.id}
          {...item}
          favourite={item.favourite}
          like={item.like}
          onDeleted={() => onDeleted(item.id)}
          onToggleProp={e => onToggleProp(item.id, e.currentTarget.getAttribute('data-toggle'))}
        />
      ))}
    </ul>
  );
};

export default MovieList;