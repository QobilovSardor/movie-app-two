import React from 'react';
import './app-filter.css'

const AppFilter = () => {
  return (
    <div className='btn-group'>
      <button className='btn btn-dark' type='button'>
        Barcha kinorlar
      </button>
      <button className='btn btn-outline-dark' type='button'>
        Mashhur kinorlar
      </button>
      <button className='btn btn-outline-dark' type='button'>
        Eng ko'p ko'rilgan kinorlar
      </button>
    </div>
  );
};

export default AppFilter;