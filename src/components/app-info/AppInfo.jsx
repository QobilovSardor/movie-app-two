import React from 'react';
import './app-info.css'

const AppInfo = ({ allMoviesConunt, favouriteMoviesCount }) => {
  return (
    <div className='app-info'>
      <p className='fs-4 text-uppercase'>Barcha kinolar soni: {allMoviesConunt}</p>
      <p className='fs-4 text-uppercase'>Sevimli filmlar soni: {favouriteMoviesCount}</p>
    </div>
  );
};

export default AppInfo;