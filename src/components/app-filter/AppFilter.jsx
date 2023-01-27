import React from 'react';
import './app-filter.css'

const AppFilter = ({ filter, updateFilterHendler }) => {
  return (
    <div className='btn-group'>
      {btnsArr.map(btn => (
        <button 
          key={btn.name} 
          className={`btn ${filter === btn.name ? 'btn-dark' : 'btn-outline-dark'}`}
          type='button'
          onClick={() => updateFilterHendler(btn.name)}
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
};

const btnsArr = [
  {name: 'all', label: 'Barcha kinorlar'},
  {name: 'popular', label: 'Mashhur kinorlar'},
  {name: 'mostViewers', label: "Eng ko'p ko'rilgan kinorlar"},
]

export default AppFilter;